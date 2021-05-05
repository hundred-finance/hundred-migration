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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PCTtoHundredMigratorInterface extends ethers.utils.Interface {
  functions: {
    "Hundred()": FunctionFragment;
    "PCT()": FunctionFragment;
    "PercentMax()": FunctionFragment;
    "UserPercent()": FunctionFragment;
    "Vesting()": FunctionFragment;
    "VestingPercent()": FunctionFragment;
    "migrate(uint256)": FunctionFragment;
    "migrateAll()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "Hundred", values?: undefined): string;
  encodeFunctionData(functionFragment: "PCT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PercentMax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UserPercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Vesting", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "VestingPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateAll",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "Hundred", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PCT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PercentMax", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UserPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Vesting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "VestingPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrateAll", data: BytesLike): Result;

  events: {};
}

export class PCTtoHundredMigrator extends Contract {
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

  interface: PCTtoHundredMigratorInterface;

  functions: {
    Hundred(overrides?: CallOverrides): Promise<[string]>;

    "Hundred()"(overrides?: CallOverrides): Promise<[string]>;

    PCT(overrides?: CallOverrides): Promise<[string]>;

    "PCT()"(overrides?: CallOverrides): Promise<[string]>;

    PercentMax(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PercentMax()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    UserPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    "UserPercent()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    Vesting(overrides?: CallOverrides): Promise<[string]>;

    "Vesting()"(overrides?: CallOverrides): Promise<[string]>;

    VestingPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    "VestingPercent()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    migrate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "migrate(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "migrateAll()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  Hundred(overrides?: CallOverrides): Promise<string>;

  "Hundred()"(overrides?: CallOverrides): Promise<string>;

  PCT(overrides?: CallOverrides): Promise<string>;

  "PCT()"(overrides?: CallOverrides): Promise<string>;

  PercentMax(overrides?: CallOverrides): Promise<BigNumber>;

  "PercentMax()"(overrides?: CallOverrides): Promise<BigNumber>;

  UserPercent(overrides?: CallOverrides): Promise<BigNumber>;

  "UserPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

  Vesting(overrides?: CallOverrides): Promise<string>;

  "Vesting()"(overrides?: CallOverrides): Promise<string>;

  VestingPercent(overrides?: CallOverrides): Promise<BigNumber>;

  "VestingPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

  migrate(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "migrate(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "migrateAll()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Hundred(overrides?: CallOverrides): Promise<string>;

    "Hundred()"(overrides?: CallOverrides): Promise<string>;

    PCT(overrides?: CallOverrides): Promise<string>;

    "PCT()"(overrides?: CallOverrides): Promise<string>;

    PercentMax(overrides?: CallOverrides): Promise<BigNumber>;

    "PercentMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    UserPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "UserPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    Vesting(overrides?: CallOverrides): Promise<string>;

    "Vesting()"(overrides?: CallOverrides): Promise<string>;

    VestingPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "VestingPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "migrate(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateAll(overrides?: CallOverrides): Promise<void>;

    "migrateAll()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    Hundred(overrides?: CallOverrides): Promise<BigNumber>;

    "Hundred()"(overrides?: CallOverrides): Promise<BigNumber>;

    PCT(overrides?: CallOverrides): Promise<BigNumber>;

    "PCT()"(overrides?: CallOverrides): Promise<BigNumber>;

    PercentMax(overrides?: CallOverrides): Promise<BigNumber>;

    "PercentMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    UserPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "UserPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    Vesting(overrides?: CallOverrides): Promise<BigNumber>;

    "Vesting()"(overrides?: CallOverrides): Promise<BigNumber>;

    VestingPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "VestingPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "migrate(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "migrateAll()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Hundred(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "Hundred()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PCT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PCT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PercentMax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PercentMax()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UserPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UserPercent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Vesting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "Vesting()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VestingPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VestingPercent()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "migrate(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "migrateAll()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
