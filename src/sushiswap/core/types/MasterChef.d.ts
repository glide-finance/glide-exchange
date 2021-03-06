/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers'
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface MasterChefInterface extends ethers.utils.Interface {
  functions: {
    'BONUS_MULTIPLIER()': FunctionFragment
    'add(uint256,address,bool)': FunctionFragment
    'bonusEndBlock()': FunctionFragment
    'deposit(uint256,uint256)': FunctionFragment
    'dev(address)': FunctionFragment
    'devaddr()': FunctionFragment
    'emergencyWithdraw(uint256)': FunctionFragment
    'getMultiplier(uint256,uint256)': FunctionFragment
    'massUpdatePools()': FunctionFragment
    'migrate(uint256)': FunctionFragment
    'migrator()': FunctionFragment
    'owner()': FunctionFragment
    'pendingSushi(uint256,address)': FunctionFragment
    'poolInfo(uint256)': FunctionFragment
    'poolLength()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'set(uint256,uint256,bool)': FunctionFragment
    'setMigrator(address)': FunctionFragment
    'startBlock()': FunctionFragment
    'sushi()': FunctionFragment
    'sushiPerBlock()': FunctionFragment
    'totalAllocPoint()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'updatePool(uint256)': FunctionFragment
    'userInfo(uint256,address)': FunctionFragment
    'withdraw(uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'BONUS_MULTIPLIER', values?: undefined): string
  encodeFunctionData(functionFragment: 'add', values: [BigNumberish, string, boolean]): string
  encodeFunctionData(functionFragment: 'bonusEndBlock', values?: undefined): string
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'dev', values: [string]): string
  encodeFunctionData(functionFragment: 'devaddr', values?: undefined): string
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'getMultiplier', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'massUpdatePools', values?: undefined): string
  encodeFunctionData(functionFragment: 'migrate', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'migrator', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'pendingSushi', values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'poolInfo', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'poolLength', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(functionFragment: 'set', values: [BigNumberish, BigNumberish, boolean]): string
  encodeFunctionData(functionFragment: 'setMigrator', values: [string]): string
  encodeFunctionData(functionFragment: 'startBlock', values?: undefined): string
  encodeFunctionData(functionFragment: 'sushi', values?: undefined): string
  encodeFunctionData(functionFragment: 'sushiPerBlock', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalAllocPoint', values?: undefined): string
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string
  encodeFunctionData(functionFragment: 'updatePool', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'userInfo', values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'BONUS_MULTIPLIER', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bonusEndBlock', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'dev', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'devaddr', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getMultiplier', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'massUpdatePools', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pendingSushi', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'poolLength', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'set', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMigrator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'startBlock', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'sushi', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'sushiPerBlock', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalAllocPoint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Deposit(address,uint256,uint256)': EventFragment
    'EmergencyWithdraw(address,uint256,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'Withdraw(address,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'EmergencyWithdraw'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment
}

export class MasterChef extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: MasterChefInterface

  functions: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>

    'BONUS_MULTIPLIER()'(overrides?: CallOverrides): Promise<[BigNumber]>

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'add(uint256,address,bool)'(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    bonusEndBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'bonusEndBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'deposit(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    dev(_devaddr: string, overrides?: Overrides): Promise<ContractTransaction>

    'dev(address)'(_devaddr: string, overrides?: Overrides): Promise<ContractTransaction>

    devaddr(overrides?: CallOverrides): Promise<[string]>

    'devaddr()'(overrides?: CallOverrides): Promise<[string]>

    emergencyWithdraw(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'emergencyWithdraw(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    getMultiplier(_from: BigNumberish, _to: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    'getMultiplier(uint256,uint256)'(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    massUpdatePools(overrides?: Overrides): Promise<ContractTransaction>

    'massUpdatePools()'(overrides?: Overrides): Promise<ContractTransaction>

    migrate(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'migrate(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    migrator(overrides?: CallOverrides): Promise<[string]>

    'migrator()'(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'pendingSushi(uint256,address)'(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber]>

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    'poolInfo(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>

    'poolLength()'(overrides?: CallOverrides): Promise<[BigNumber]>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'set(uint256,uint256,bool)'(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setMigrator(_migrator: string, overrides?: Overrides): Promise<ContractTransaction>

    'setMigrator(address)'(_migrator: string, overrides?: Overrides): Promise<ContractTransaction>

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'startBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    sushi(overrides?: CallOverrides): Promise<[string]>

    'sushi()'(overrides?: CallOverrides): Promise<[string]>

    sushiPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'sushiPerBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<[BigNumber]>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

    updatePool(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'updatePool(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

    'userInfo(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'withdraw(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>

  'BONUS_MULTIPLIER()'(overrides?: CallOverrides): Promise<BigNumber>

  add(
    _allocPoint: BigNumberish,
    _lpToken: string,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'add(uint256,address,bool)'(
    _allocPoint: BigNumberish,
    _lpToken: string,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>

  'bonusEndBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'deposit(uint256,uint256)'(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  dev(_devaddr: string, overrides?: Overrides): Promise<ContractTransaction>

  'dev(address)'(_devaddr: string, overrides?: Overrides): Promise<ContractTransaction>

  devaddr(overrides?: CallOverrides): Promise<string>

  'devaddr()'(overrides?: CallOverrides): Promise<string>

  emergencyWithdraw(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'emergencyWithdraw(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  getMultiplier(_from: BigNumberish, _to: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  'getMultiplier(uint256,uint256)'(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  massUpdatePools(overrides?: Overrides): Promise<ContractTransaction>

  'massUpdatePools()'(overrides?: Overrides): Promise<ContractTransaction>

  migrate(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'migrate(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  migrator(overrides?: CallOverrides): Promise<string>

  'migrator()'(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

  'pendingSushi(uint256,address)'(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      lpToken: string
      allocPoint: BigNumber
      lastRewardBlock: BigNumber
      accSushiPerShare: BigNumber
    }
  >

  'poolInfo(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      lpToken: string
      allocPoint: BigNumber
      lastRewardBlock: BigNumber
      accSushiPerShare: BigNumber
    }
  >

  poolLength(overrides?: CallOverrides): Promise<BigNumber>

  'poolLength()'(overrides?: CallOverrides): Promise<BigNumber>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  'renounceOwnership()'(overrides?: Overrides): Promise<ContractTransaction>

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'set(uint256,uint256,bool)'(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    _withUpdate: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setMigrator(_migrator: string, overrides?: Overrides): Promise<ContractTransaction>

  'setMigrator(address)'(_migrator: string, overrides?: Overrides): Promise<ContractTransaction>

  startBlock(overrides?: CallOverrides): Promise<BigNumber>

  'startBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  sushi(overrides?: CallOverrides): Promise<string>

  'sushi()'(overrides?: CallOverrides): Promise<string>

  sushiPerBlock(overrides?: CallOverrides): Promise<BigNumber>

  'sushiPerBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

  'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>

  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  updatePool(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'updatePool(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

  'userInfo(uint256,address)'(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

  withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'withdraw(uint256,uint256)'(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>

    'BONUS_MULTIPLIER()'(overrides?: CallOverrides): Promise<BigNumber>

    add(_allocPoint: BigNumberish, _lpToken: string, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>

    'add(uint256,address,bool)'(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>

    'bonusEndBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'deposit(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    dev(_devaddr: string, overrides?: CallOverrides): Promise<void>

    'dev(address)'(_devaddr: string, overrides?: CallOverrides): Promise<void>

    devaddr(overrides?: CallOverrides): Promise<string>

    'devaddr()'(overrides?: CallOverrides): Promise<string>

    emergencyWithdraw(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    'emergencyWithdraw(uint256)'(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    getMultiplier(_from: BigNumberish, _to: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getMultiplier(uint256,uint256)'(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    massUpdatePools(overrides?: CallOverrides): Promise<void>

    'massUpdatePools()'(overrides?: CallOverrides): Promise<void>

    migrate(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    'migrate(uint256)'(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    migrator(overrides?: CallOverrides): Promise<string>

    'migrator()'(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

    'pendingSushi(uint256,address)'(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    'poolInfo(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        lpToken: string
        allocPoint: BigNumber
        lastRewardBlock: BigNumber
        accSushiPerShare: BigNumber
      }
    >

    poolLength(overrides?: CallOverrides): Promise<BigNumber>

    'poolLength()'(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>

    set(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: CallOverrides): Promise<void>

    'set(uint256,uint256,bool)'(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: CallOverrides
    ): Promise<void>

    setMigrator(_migrator: string, overrides?: CallOverrides): Promise<void>

    'setMigrator(address)'(_migrator: string, overrides?: CallOverrides): Promise<void>

    startBlock(overrides?: CallOverrides): Promise<BigNumber>

    'startBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    sushi(overrides?: CallOverrides): Promise<string>

    'sushi()'(overrides?: CallOverrides): Promise<string>

    sushiPerBlock(overrides?: CallOverrides): Promise<BigNumber>

    'sushiPerBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>

    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    'updatePool(uint256)'(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

    'userInfo(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'withdraw(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Deposit(user: string | null, pid: BigNumberish | null, amount: null): EventFilter

    EmergencyWithdraw(user: string | null, pid: BigNumberish | null, amount: null): EventFilter

    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter

    Withdraw(user: string | null, pid: BigNumberish | null, amount: null): EventFilter
  }

  estimateGas: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>

    'BONUS_MULTIPLIER()'(overrides?: CallOverrides): Promise<BigNumber>

    add(_allocPoint: BigNumberish, _lpToken: string, _withUpdate: boolean, overrides?: Overrides): Promise<BigNumber>

    'add(uint256,address,bool)'(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    bonusEndBlock(overrides?: CallOverrides): Promise<BigNumber>

    'bonusEndBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'deposit(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    dev(_devaddr: string, overrides?: Overrides): Promise<BigNumber>

    'dev(address)'(_devaddr: string, overrides?: Overrides): Promise<BigNumber>

    devaddr(overrides?: CallOverrides): Promise<BigNumber>

    'devaddr()'(overrides?: CallOverrides): Promise<BigNumber>

    emergencyWithdraw(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'emergencyWithdraw(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    getMultiplier(_from: BigNumberish, _to: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getMultiplier(uint256,uint256)'(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    massUpdatePools(overrides?: Overrides): Promise<BigNumber>

    'massUpdatePools()'(overrides?: Overrides): Promise<BigNumber>

    migrate(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'migrate(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    migrator(overrides?: CallOverrides): Promise<BigNumber>

    'migrator()'(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

    'pendingSushi(uint256,address)'(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'poolInfo(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    poolLength(overrides?: CallOverrides): Promise<BigNumber>

    'poolLength()'(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>

    'renounceOwnership()'(overrides?: Overrides): Promise<BigNumber>

    set(_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean, overrides?: Overrides): Promise<BigNumber>

    'set(uint256,uint256,bool)'(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>

    setMigrator(_migrator: string, overrides?: Overrides): Promise<BigNumber>

    'setMigrator(address)'(_migrator: string, overrides?: Overrides): Promise<BigNumber>

    startBlock(overrides?: CallOverrides): Promise<BigNumber>

    'startBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    sushi(overrides?: CallOverrides): Promise<BigNumber>

    'sushi()'(overrides?: CallOverrides): Promise<BigNumber>

    sushiPerBlock(overrides?: CallOverrides): Promise<BigNumber>

    'sushiPerBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<BigNumber>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<BigNumber>

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<BigNumber>

    updatePool(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'updatePool(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    'userInfo(uint256,address)'(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'withdraw(uint256,uint256)'(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>
  }

  populateTransaction: {
    BONUS_MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'BONUS_MULTIPLIER()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    add(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'add(uint256,address,bool)'(
      _allocPoint: BigNumberish,
      _lpToken: string,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    bonusEndBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'bonusEndBlock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    deposit(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'deposit(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    dev(_devaddr: string, overrides?: Overrides): Promise<PopulatedTransaction>

    'dev(address)'(_devaddr: string, overrides?: Overrides): Promise<PopulatedTransaction>

    devaddr(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'devaddr()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    emergencyWithdraw(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'emergencyWithdraw(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    getMultiplier(_from: BigNumberish, _to: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getMultiplier(uint256,uint256)'(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    massUpdatePools(overrides?: Overrides): Promise<PopulatedTransaction>

    'massUpdatePools()'(overrides?: Overrides): Promise<PopulatedTransaction>

    migrate(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'migrate(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    migrator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'migrator()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'pendingSushi(uint256,address)'(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'poolInfo(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'poolLength()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>

    'renounceOwnership()'(overrides?: Overrides): Promise<PopulatedTransaction>

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'set(uint256,uint256,bool)'(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      _withUpdate: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    setMigrator(_migrator: string, overrides?: Overrides): Promise<PopulatedTransaction>

    'setMigrator(address)'(_migrator: string, overrides?: Overrides): Promise<PopulatedTransaction>

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'startBlock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    sushi(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'sushi()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    sushiPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'sushiPerBlock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalAllocPoint()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<PopulatedTransaction>

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<PopulatedTransaction>

    updatePool(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'updatePool(uint256)'(_pid: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    userInfo(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'userInfo(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'withdraw(uint256,uint256)'(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
