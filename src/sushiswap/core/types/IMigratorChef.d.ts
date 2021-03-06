/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers'
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IMigratorChefInterface extends ethers.utils.Interface {
  functions: {
    'migrate(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'migrate', values: [string]): string

  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result

  events: {}
}

export class IMigratorChef extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IMigratorChefInterface

  functions: {
    migrate(token: string, overrides?: Overrides): Promise<ContractTransaction>

    'migrate(address)'(token: string, overrides?: Overrides): Promise<ContractTransaction>
  }

  migrate(token: string, overrides?: Overrides): Promise<ContractTransaction>

  'migrate(address)'(token: string, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    migrate(token: string, overrides?: CallOverrides): Promise<string>

    'migrate(address)'(token: string, overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    migrate(token: string, overrides?: Overrides): Promise<BigNumber>

    'migrate(address)'(token: string, overrides?: Overrides): Promise<BigNumber>
  }

  populateTransaction: {
    migrate(token: string, overrides?: Overrides): Promise<PopulatedTransaction>

    'migrate(address)'(token: string, overrides?: Overrides): Promise<PopulatedTransaction>
  }
}
