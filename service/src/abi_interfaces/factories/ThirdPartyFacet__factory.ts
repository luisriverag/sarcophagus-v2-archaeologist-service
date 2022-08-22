/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ThirdPartyFacet,
  ThirdPartyFacetInterface,
} from "../ThirdPartyFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursedBond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotEnoughCursedBond",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
    ],
    name: "SarcophagusDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "SarcophagusIsUnwrappable",
    type: "error",
  },
  {
    inputs: [],
    name: "SarcophagusNotCleanable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accuser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accuserBondReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "embalmerBondReward",
        type: "uint256",
      },
    ],
    name: "AccuseArchaeologist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cleaner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cleanerBondReward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "embalmerBondReward",
        type: "uint256",
      },
    ],
    name: "CleanUpSarcophagus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "unencryptedShardHashes",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "paymentAddress",
        type: "address",
      },
    ],
    name: "accuse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sarcoId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "paymentAddress",
        type: "address",
      },
    ],
    name: "clean",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611682806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633f5e9d6c1461003b5780635c88a8e114610057575b600080fd5b6100556004803603810190610050919061111c565b610073565b005b610071600480360381019061006c91906112b5565b610560565b005b600080600c0160008481526020019081526020016000209050600160028111156100a05761009f611324565b5b8160010160009054906101000a900460ff1660028111156100c4576100c3611324565b5b1461010657826040517f018da6880000000000000000000000000000000000000000000000000000000081526004016100fd9190611362565b60405180910390fd5b80600201546101188260020154610b47565b61012291906113b6565b42101561015b576040517f57f122a100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000816009018054806020026020016040519081016040528092919081815260200182805480156101e157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610197575b50505050509050600080600080600090505b84518110156104c25760008015156000600701600088858151811061021b5761021a61140c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b815260200190815260200160002060009054906101000a900460ff16151514905080156104ae5760008060110160008b815260200190815260200160002060008885815181106102b3576102b261140c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a001604052908160008201548152602001600182015481526020016002820154815260200160038201805461032e9061146a565b80601f016020809104026020016040519081016040528092919081815260200182805461035a9061146a565b80156103a75780601f1061037c576101008083540402835291602001916103a7565b820191906000526020600020905b81548152906001019060200180831161038a57829003601f168201915b5050505050815260200160048201548152505090508060200151846103cc91906113b6565b93508060000151856103de91906113b6565b945060006103f482600001518360200151610ba2565b9050808761040291906113b6565b965061042888858151811061041a5761041961140c565b5b602002602001015182610bb8565b6000600a0160008986815181106104425761044161140c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208b908060018154018082558091505060019003906000526020600020016000909190919091505550505b5080806104ba9061149b565b9150506101f3565b506000806104d38888878787610cea565b9150915060028760010160006101000a81548160ff021916908360028111156104ff576104fe611324565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff16897f106e723534f3d39516c80d5e49eb5ac7788139c661267137c40382659d409fb9848460405161054d9291906114f2565b60405180910390a3505050505050505050565b600080600c01600085815260200190815260200160002090506001600281111561058d5761058c611324565b5b8160010160009054906101000a900460ff1660028111156105b1576105b0611324565b5b146105f357836040517f018da6880000000000000000000000000000000000000000000000000000000081526004016105ea9190611362565b60405180910390fd5b4281600201541015610631576040517f8680d5de00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060010160029054906101000a900460ff1660ff1683511015610680576040517f2bb3a5a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000835167ffffffffffffffff81111561069d5761069c611172565b5b6040519080825280602002602001820160405280156106cb5781602001602082028036833780820191505090505b50905060008060008060005b88518110156109235760008982815181106106f5576106f461140c565b5b602002602001015160405160200161070d9190611362565b604051602081830303815290604052805190602001209050600080601001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060110160008e815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050828160020154036108db57818986806107cd9061149b565b9750815181106107e0576107df61140c565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600061082e82600001548360010154610ba2565b905081600001548961084091906113b6565b985081600101548861085291906113b6565b9750808761086091906113b6565b965061086c8382610bb8565b600060090160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208e90806001815401808255809150506001900390600052602060002001600090919091909150555061090d565b6040517f2bb3a5a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050808061091b9061149b565b9150506106d7565b50600080600c0160008b81526020019081526020016000206009018054806020026020016040519081016040528092919081815260200182805480156109be57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610974575b5050505050905060005b8151811015610aa65760006001905060005b8851811015610a66578881815181106109f6576109f561140c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16848481518110610a2757610a2661140c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603610a535760009150610a66565b8080610a5e9061149b565b9150506109da565b508015610a9257610a918c848481518110610a8457610a8361140c565b5b6020026020010151610ea0565b5b508080610a9e9061149b565b9150506109c8565b50600080610ab78a8a878a8a610cea565b9150915060028960010160006101000a81548160ff02191690836002811115610ae357610ae2611324565b5b02179055503373ffffffffffffffffffffffffffffffffffffffff168c7f6cee286923fc4de6af78ba8b06ff9f4236e5aad4282a5e13a3cea8446c803fd48484604051610b319291906114f2565b60405180910390a3505050505050505050505050565b600080610708905060006064428511610b6b578442610b66919061151b565b610b78565b4285610b77919061151b565b5b610b82919061157e565b90508161ffff16811015610b98578161ffff1690505b8092505050919050565b60008183610bb091906113b6565b905092915050565b6000610bc2610fee565b90508060060160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610c8d578060060160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826040517faf5a111b000000000000000000000000000000000000000000000000000000008152600401610c849291906114f2565b60405180910390fd5b818160060160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cde919061151b565b92505081905550505050565b6000806000600286610cfc919061157e565b905060008187610d0c919061151b565b90506000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8960060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848989610d8091906113b6565b610d8a91906113b6565b6040518363ffffffff1660e01b8152600401610da79291906115be565b6020604051808303816000875af1158015610dc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dea919061161f565b506000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8a836040518363ffffffff1660e01b8152600401610e4a9291906115be565b6020604051808303816000875af1158015610e69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8d919061161f565b5080829350935050509550959350505050565b6000610eaa610fee565b9050600081601101600085815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082015481526020016001820154815260200160028201548152602001600382018054610f399061146a565b80601f0160208091040260200160405190810160405280929190818152602001828054610f659061146a565b8015610fb25780601f10610f8757610100808354040283529160200191610fb2565b820191906000526020600020905b815481529060010190602001808311610f9557829003601f168201915b5050505050815260200160048201548152505090506000610fdb82600001518360200151610ba2565b9050610fe78482610ff3565b5050505050565b600090565b610ffd8282610bb8565b611007828261100b565b5050565b6000611015610fee565b9050818160050160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461106891906113b6565b92505081905550505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61109b81611088565b81146110a657600080fd5b50565b6000813590506110b881611092565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110e9826110be565b9050919050565b6110f9816110de565b811461110457600080fd5b50565b600081359050611116816110f0565b92915050565b600080604083850312156111335761113261107e565b5b6000611141858286016110a9565b925050602061115285828601611107565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6111aa82611161565b810181811067ffffffffffffffff821117156111c9576111c8611172565b5b80604052505050565b60006111dc611074565b90506111e882826111a1565b919050565b600067ffffffffffffffff82111561120857611207611172565b5b602082029050602081019050919050565b600080fd5b600061123161122c846111ed565b6111d2565b9050808382526020820190506020840283018581111561125457611253611219565b5b835b8181101561127d578061126988826110a9565b845260208401935050602081019050611256565b5050509392505050565b600082601f83011261129c5761129b61115c565b5b81356112ac84826020860161121e565b91505092915050565b6000806000606084860312156112ce576112cd61107e565b5b60006112dc868287016110a9565b935050602084013567ffffffffffffffff8111156112fd576112fc611083565b5b61130986828701611287565b925050604061131a86828701611107565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61135c81611088565b82525050565b60006020820190506113776000830184611353565b92915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113c18261137d565b91506113cc8361137d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561140157611400611387565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148257607f821691505b6020821081036114955761149461143b565b5b50919050565b60006114a68261137d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036114d8576114d7611387565b5b600182019050919050565b6114ec8161137d565b82525050565b600060408201905061150760008301856114e3565b61151460208301846114e3565b9392505050565b60006115268261137d565b91506115318361137d565b92508282101561154457611543611387565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006115898261137d565b91506115948361137d565b9250826115a4576115a361154f565b5b828204905092915050565b6115b8816110de565b82525050565b60006040820190506115d360008301856115af565b6115e060208301846114e3565b9392505050565b60008115159050919050565b6115fc816115e7565b811461160757600080fd5b50565b600081519050611619816115f3565b92915050565b6000602082840312156116355761163461107e565b5b60006116438482850161160a565b9150509291505056fea26469706673582212200f3b1957e38a4f9c82697c96e01b5f80903d6c5766990689bef4259c018d38f764736f6c634300080d0033";

export class ThirdPartyFacet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ThirdPartyFacet> {
    return super.deploy(overrides || {}) as Promise<ThirdPartyFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ThirdPartyFacet {
    return super.attach(address) as ThirdPartyFacet;
  }
  connect(signer: Signer): ThirdPartyFacet__factory {
    return super.connect(signer) as ThirdPartyFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ThirdPartyFacetInterface {
    return new utils.Interface(_abi) as ThirdPartyFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ThirdPartyFacet {
    return new Contract(address, _abi, signerOrProvider) as ThirdPartyFacet;
  }
}
