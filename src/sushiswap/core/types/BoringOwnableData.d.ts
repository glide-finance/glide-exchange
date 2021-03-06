/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers'
import { Contract, ContractTransaction, CallOverrides } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface BoringOwnableDataInterface extends ethers.utils.Interface {
  functions: {
    'owner()': FunctionFragment
    'pendingOwner()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'pendingOwner', values?: undefined): string

  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pendingOwner', data: BytesLike): Result

  events: {}
}

export class BoringOwnableData extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: BoringOwnableDataInterface

  functions: {
    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    pendingOwner(overrides?: CallOverrides): Promise<[string]>

    'pendingOwner()'(overrides?: CallOverrides): Promise<[string]>
  }

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  pendingOwner(overrides?: CallOverrides): Promise<string>

  'pendingOwner()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    pendingOwner(overrides?: CallOverrides): Promise<string>

    'pendingOwner()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>

    'pendingOwner()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'pendingOwner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
