import { createLibp2p, Libp2p } from "libp2p";
import { Noise } from "@chainsafe/libp2p-noise";
import { Mplex } from "@libp2p/mplex";
import { WebRTCDirect } from '@libp2p/webrtc-direct'
import { TCP } from '@libp2p/tcp'
import { Bootstrap } from '@libp2p/bootstrap'
import { FloodSub } from '@libp2p/floodsub'
import { PubSubPeerDiscovery } from '@libp2p/pubsub-peer-discovery'
import { WebSockets } from '@libp2p/websockets'
import wrtc from 'wrtc'
import createBootstrapNode from "./bootstrap-node.js";
import { toString as uint8ArrayToString } from 'uint8arrays/to-string';

const LISTEN_ADDRESS_BOOSTRAP = ['/ip4/127.0.0.1/tcp/9092/http/p2p-webrtc-direct']
const LISTEN_ADDRESS_ARCH1 = ['/ip4/127.0.0.1/tcp/9091/http/p2p-webrtc-direct']
const LISTEN_ADDRESS_ARCH2 = ['/ip4/127.0.0.1/tcp/9090/http/p2p-webrtc-direct']

// const LISTEN_ADDRESS_BOOSTRAP = ['/ip4/127.0.0.1/tcp/30000/ws']
// const LISTEN_ADDRESS_ARCH1 = ['/ip4/127.0.0.1/tcp/20000/ws']
// const LISTEN_ADDRESS_ARCH2 = ['/ip4/127.0.0.1/tcp/10000/ws']

// const LISTEN_ADDRESS_BOOSTRAP = ['/ip4/0.0.0.0/tcp/0']
// const LISTEN_ADDRESS_ARCH1 = ['/ip4/0.0.0.0/tcp/0']
// const LISTEN_ADDRESS_ARCH2 = ['/ip4/0.0.0.0/tcp/0']


async function createNode(listenAddresses: string[], boostrapList: string[], name: string): Promise<Libp2p> {
  const topics = [// It's recommended but not required to extend the global space
    'testytime/_peer-discovery._p2p._pubsub' // Include if you want to participate in the global space
  ]

  const node = await createLibp2p({
    addresses: {
      listen: listenAddresses
    },
    transports: [
      // new TCP()
      new WebRTCDirect({ wrtc }),
      // new WebSockets()
    ],
    connectionEncryption: [
      new Noise()
    ],
    streamMuxers: [
      new Mplex()
    ],
    pubsub: new FloodSub({
      enabled: true,
      canRelayMessage: true,
      emitSelf: false
    }),
    peerDiscovery: [
      new Bootstrap({
        list: boostrapList
      }),
      new PubSubPeerDiscovery({
        interval: 10000,
        topics: topics, // defaults to ['_peer-discovery._p2p._pubsub']
        listenOnly: false
      })
    ],
    connectionManager: {
      autoDial: true
    }
  })

  node.addEventListener('peer:discovery', (evt) => {
    const peer = evt.detail
    console.log(`${name} discovered: ${peer.id.toString()}`)
  })

  node.connectionManager.addEventListener('peer:connect', (evt) => {
    const peer = evt.detail.remotePeer
    console.log(`${name} Connection established to:`, peer.toString())
  })

  node.connectionManager.addEventListener('peer:disconnect', (evt) => {
    const peer = evt.detail.remotePeer
    console.log(`${name} Connection dropped from:`, peer.toString())
  })

  ;console.log(`${name} starting with id: ${node.peerId.toString()}`)

  await node.start()
  return node
}

/**
 * Create bootstrap relay node
 */
const [boostrap] = await Promise.all([
  createBootstrapNode(LISTEN_ADDRESS_BOOSTRAP, "bootstrap"),
])

/**
 * Create archaeologist nodes
 */
const bootstrapMultiaddrs = boostrap.getMultiaddrs().map((m) => m.toString())

const [arch1, arch2] = await Promise.all([
  createNode(LISTEN_ADDRESS_ARCH1, bootstrapMultiaddrs, "arch1"),
  createNode(LISTEN_ADDRESS_ARCH2, bootstrapMultiaddrs, "arch2"),
])

