/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ArchaeologistFacetInterface extends ethers.utils.Interface {
  functions: {
    "depositFreeBond(uint256)": FunctionFragment;
    "finalizeTransfer(bytes32,string,(uint8,bytes32,bytes32))": FunctionFragment;
    "registerArchaeologist(string,uint256,uint256,uint256)": FunctionFragment;
    "unwrapSarcophagus(bytes32,bytes)": FunctionFragment;
    "updateArchaeologist(string,uint256,uint256,uint256)": FunctionFragment;
    "withdrawFreeBond(uint256)": FunctionFragment;
    "withdrawReward(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "depositFreeBond", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "finalizeTransfer",
    values: [BytesLike, string, { v: BigNumberish; r: BytesLike; s: BytesLike }]
  ): string;
  encodeFunctionData(
    functionFragment: "registerArchaeologist",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unwrapSarcophagus", values: [BytesLike, BytesLike]): string;
  encodeFunctionData(
    functionFragment: "updateArchaeologist",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdrawFreeBond", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "withdrawReward", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "depositFreeBond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registerArchaeologist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrapSarcophagus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateArchaeologist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawFreeBond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawReward", data: BytesLike): Result;

  events: {
    "DepositFreeBond(address,uint256)": EventFragment;
    "FinalizeTransfer(bytes32,string,address,address,uint256)": EventFragment;
    "RegisterArchaeologist(address,string,uint256,uint256,uint256)": EventFragment;
    "UnwrapSarcophagus(bytes32,bytes)": EventFragment;
    "UpdateArchaeologist(address,string,uint256,uint256,uint256)": EventFragment;
    "WithdrawFreeBond(address,uint256)": EventFragment;
    "WithdrawReward(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositFreeBond"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FinalizeTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterArchaeologist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnwrapSarcophagus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateArchaeologist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFreeBond"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawReward"): EventFragment;
}

export type DepositFreeBondEvent = TypedEvent<
  [string, BigNumber] & { archaeologist: string; depositedBond: BigNumber }
>;

export type FinalizeTransferEvent = TypedEvent<
  [string, string, string, string, BigNumber] & {
    sarcoId: string;
    arweaveTxId: string;
    oldArchaeologist: string;
    newArchaeologist: string;
    curseTokenId: BigNumber;
  }
>;

export type RegisterArchaeologistEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    archaeologist: string;
    peerId: string;
    minimumDiggingFee: BigNumber;
    maximumRewrapInterval: BigNumber;
    freeBond: BigNumber;
  }
>;

export type UnwrapSarcophagusEvent = TypedEvent<
  [string, string] & { sarcoId: string; unencryptedShard: string }
>;

export type UpdateArchaeologistEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    archaeologist: string;
    peerId: string;
    minimumDiggingFee: BigNumber;
    maximumRewrapInterval: BigNumber;
    freeBond: BigNumber;
  }
>;

export type WithdrawFreeBondEvent = TypedEvent<
  [string, BigNumber] & { archaeologist: string; withdrawnBond: BigNumber }
>;

export type WithdrawRewardEvent = TypedEvent<
  [string, BigNumber] & { archaeologist: string; withdrawnReward: BigNumber }
>;

export class ArchaeologistFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ArchaeologistFacetInterface;

  functions: {
    depositFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finalizeTransfer(
      sarcoId: BytesLike,
      arweaveTxId: string,
      oldArchSignature: { v: BigNumberish; r: BytesLike; s: BytesLike },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrapSarcophagus(
      sarcoId: BytesLike,
      unencryptedShard: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositFreeBond(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finalizeTransfer(
    sarcoId: BytesLike,
    arweaveTxId: string,
    oldArchSignature: { v: BigNumberish; r: BytesLike; s: BytesLike },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerArchaeologist(
    peerId: string,
    minimumDiggingFee: BigNumberish,
    maximumRewrapInterval: BigNumberish,
    freeBond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrapSarcophagus(
    sarcoId: BytesLike,
    unencryptedShard: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateArchaeologist(
    peerId: string,
    minimumDiggingFee: BigNumberish,
    maximumRewrapInterval: BigNumberish,
    freeBond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFreeBond(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawReward(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositFreeBond(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    finalizeTransfer(
      sarcoId: BytesLike,
      arweaveTxId: string,
      oldArchSignature: { v: BigNumberish; r: BytesLike; s: BytesLike },
      overrides?: CallOverrides
    ): Promise<void>;

    registerArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapSarcophagus(
      sarcoId: BytesLike,
      unencryptedShard: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updateArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFreeBond(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawReward(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "DepositFreeBond(address,uint256)"(
      archaeologist?: string | null,
      depositedBond?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; depositedBond: BigNumber }>;

    DepositFreeBond(
      archaeologist?: string | null,
      depositedBond?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; depositedBond: BigNumber }>;

    "FinalizeTransfer(bytes32,string,address,address,uint256)"(
      sarcoId?: null,
      arweaveTxId?: null,
      oldArchaeologist?: null,
      newArchaeologist?: null,
      curseTokenId?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        sarcoId: string;
        arweaveTxId: string;
        oldArchaeologist: string;
        newArchaeologist: string;
        curseTokenId: BigNumber;
      }
    >;

    FinalizeTransfer(
      sarcoId?: null,
      arweaveTxId?: null,
      oldArchaeologist?: null,
      newArchaeologist?: null,
      curseTokenId?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        sarcoId: string;
        arweaveTxId: string;
        oldArchaeologist: string;
        newArchaeologist: string;
        curseTokenId: BigNumber;
      }
    >;

    "RegisterArchaeologist(address,string,uint256,uint256,uint256)"(
      archaeologist?: string | null,
      peerId?: null,
      minimumDiggingFee?: null,
      maximumRewrapInterval?: null,
      freeBond?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        archaeologist: string;
        peerId: string;
        minimumDiggingFee: BigNumber;
        maximumRewrapInterval: BigNumber;
        freeBond: BigNumber;
      }
    >;

    RegisterArchaeologist(
      archaeologist?: string | null,
      peerId?: null,
      minimumDiggingFee?: null,
      maximumRewrapInterval?: null,
      freeBond?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        archaeologist: string;
        peerId: string;
        minimumDiggingFee: BigNumber;
        maximumRewrapInterval: BigNumber;
        freeBond: BigNumber;
      }
    >;

    "UnwrapSarcophagus(bytes32,bytes)"(
      sarcoId?: BytesLike | null,
      unencryptedShard?: null
    ): TypedEventFilter<[string, string], { sarcoId: string; unencryptedShard: string }>;

    UnwrapSarcophagus(
      sarcoId?: BytesLike | null,
      unencryptedShard?: null
    ): TypedEventFilter<[string, string], { sarcoId: string; unencryptedShard: string }>;

    "UpdateArchaeologist(address,string,uint256,uint256,uint256)"(
      archaeologist?: string | null,
      peerId?: null,
      minimumDiggingFee?: null,
      maximumRewrapInterval?: null,
      freeBond?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        archaeologist: string;
        peerId: string;
        minimumDiggingFee: BigNumber;
        maximumRewrapInterval: BigNumber;
        freeBond: BigNumber;
      }
    >;

    UpdateArchaeologist(
      archaeologist?: string | null,
      peerId?: null,
      minimumDiggingFee?: null,
      maximumRewrapInterval?: null,
      freeBond?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        archaeologist: string;
        peerId: string;
        minimumDiggingFee: BigNumber;
        maximumRewrapInterval: BigNumber;
        freeBond: BigNumber;
      }
    >;

    "WithdrawFreeBond(address,uint256)"(
      archaeologist?: string | null,
      withdrawnBond?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; withdrawnBond: BigNumber }>;

    WithdrawFreeBond(
      archaeologist?: string | null,
      withdrawnBond?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; withdrawnBond: BigNumber }>;

    "WithdrawReward(address,uint256)"(
      archaeologist?: string | null,
      withdrawnReward?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; withdrawnReward: BigNumber }>;

    WithdrawReward(
      archaeologist?: string | null,
      withdrawnReward?: null
    ): TypedEventFilter<[string, BigNumber], { archaeologist: string; withdrawnReward: BigNumber }>;
  };

  estimateGas: {
    depositFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finalizeTransfer(
      sarcoId: BytesLike,
      arweaveTxId: string,
      oldArchSignature: { v: BigNumberish; r: BytesLike; s: BytesLike },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrapSarcophagus(
      sarcoId: BytesLike,
      unencryptedShard: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finalizeTransfer(
      sarcoId: BytesLike,
      arweaveTxId: string,
      oldArchSignature: { v: BigNumberish; r: BytesLike; s: BytesLike },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrapSarcophagus(
      sarcoId: BytesLike,
      unencryptedShard: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateArchaeologist(
      peerId: string,
      minimumDiggingFee: BigNumberish,
      maximumRewrapInterval: BigNumberish,
      freeBond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFreeBond(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
