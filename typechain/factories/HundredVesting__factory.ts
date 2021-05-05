/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { HundredVesting } from "../HundredVesting";

export class HundredVesting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    hundred: string,
    _epochLength: BigNumberish,
    totalVestingTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HundredVesting> {
    return super.deploy(
      hundred,
      _epochLength,
      totalVestingTime,
      overrides || {}
    ) as Promise<HundredVesting>;
  }
  getDeployTransaction(
    hundred: string,
    _epochLength: BigNumberish,
    totalVestingTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      hundred,
      _epochLength,
      totalVestingTime,
      overrides || {}
    );
  }
  attach(address: string): HundredVesting {
    return super.attach(address) as HundredVesting;
  }
  connect(signer: Signer): HundredVesting__factory {
    return super.connect(signer) as HundredVesting__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HundredVesting {
    return new Contract(address, _abi, signerOrProvider) as HundredVesting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "hundred",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_epochLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVestingTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Hundred",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "beginVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimVested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getClaimableVest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getClaimedVest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getRemainingVest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getTotalVest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200140a3803806200140a8339818101604052810190620000379190620000c0565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505081600181905550818162000083919062000116565b60008190555050505062000203565b600081519050620000a381620001cf565b92915050565b600081519050620000ba81620001e9565b92915050565b600080600060608486031215620000d657600080fd5b6000620000e68682870162000092565b9350506020620000f986828701620000a9565b92505060406200010c86828701620000a9565b9150509250925092565b6000620001238262000196565b9150620001308362000196565b925082620001435762000142620001a0565b5b828204905092915050565b60006200015b8262000176565b9050919050565b60006200016f826200014e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b620001da8162000162565b8114620001e657600080fd5b50565b620001f48162000196565b81146200020057600080fd5b50565b60805160601c6111da6200023060003960008181610188015281816103ab015261058701526111da6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806354cd53be1161005b57806354cd53be14610100578063617f530814610130578063d01c44cd1461014c578063e1396fe3146101565761007d565b806312bd3962146100825780631481512d146100a0578063295d8dc1146100d0575b600080fd5b61008a610186565b6040516100979190610cb0565b60405180910390f35b6100ba60048036038101906100b59190610a42565b6101aa565b6040516100c79190610dad565b60405180910390f35b6100ea60048036038101906100e59190610a42565b6101f6565b6040516100f79190610dad565b60405180910390f35b61011a60048036038101906101159190610a42565b610313565b6040516101279190610dad565b60405180910390f35b61014a60048036038101906101459190610a6b565b61035f565b005b61015461052f565b005b610170600480360381019061016b9190610a42565b610662565b60405161017d9190610dad565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820154815260200160028201548152505090506000816020015114156102ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a290610ced565b60405180910390fd5b6000805482600001516001548460200151426102c79190610edb565b6102d19190610e50565b6102db9190610e81565b6102e59190610e50565b905081604001518110610307578160400151816103029190610edb565b61030a565b60005b92505050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050919050565b60008114156103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a90610d2d565b60405180910390fd5b6103f03330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610687909392919063ffffffff16565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905060008160000151146104aa57818160400151826000015161047d9190610edb565b6104879190610dfa565b8160000181815250504281602001818152505060008160400181815250506104c9565b6040518060600160405280838152602001428152602001600081525090505b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155905050505050565b600061053a336101f6565b90506000811415610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057790610d4d565b60405180910390fd5b6105cb33827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107109092919063ffffffff16565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546106199190610dfa565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b600061066d82610313565b610676836101aa565b6106809190610edb565b9050919050565b61070a846323b872dd60e01b8585856040516024016106a893929190610c50565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610796565b50505050565b6107918363a9059cbb60e01b848460405160240161072f929190610c87565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610796565b505050565b60006107f8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661085d9092919063ffffffff16565b905060008151111561085857808060200190518101906108189190610aa7565b610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e90610d8d565b60405180910390fd5b5b505050565b606061086c8484600085610875565b90509392505050565b6060824710156108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190610d0d565b60405180910390fd5b6108c385610989565b610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f990610d6d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161092b9190610c39565b60006040518083038185875af1925050503d8060008114610968576040519150601f19603f3d011682016040523d82523d6000602084013e61096d565b606091505b509150915061097d82828661099c565b92505050949350505050565b600080823b905060008111915050919050565b606083156109ac578290506109fc565b6000835111156109bf5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f39190610ccb565b60405180910390fd5b9392505050565b600081359050610a128161115f565b92915050565b600081519050610a2781611176565b92915050565b600081359050610a3c8161118d565b92915050565b600060208284031215610a5457600080fd5b6000610a6284828501610a03565b91505092915050565b60008060408385031215610a7e57600080fd5b6000610a8c85828601610a03565b9250506020610a9d85828601610a2d565b9150509250929050565b600060208284031215610ab957600080fd5b6000610ac784828501610a18565b91505092915050565b610ad981610f0f565b82525050565b6000610aea82610dc8565b610af48185610dde565b9350610b04818560208601610f7b565b80840191505092915050565b610b1981610f57565b82525050565b6000610b2a82610dd3565b610b348185610de9565b9350610b44818560208601610f7b565b610b4d8161100c565b840191505092915050565b6000610b65600f83610de9565b9150610b708261101d565b602082019050919050565b6000610b88602683610de9565b9150610b9382611046565b604082019050919050565b6000610bab601b83610de9565b9150610bb682611095565b602082019050919050565b6000610bce601a83610de9565b9150610bd9826110be565b602082019050919050565b6000610bf1601d83610de9565b9150610bfc826110e7565b602082019050919050565b6000610c14602a83610de9565b9150610c1f82611110565b604082019050919050565b610c3381610f4d565b82525050565b6000610c458284610adf565b915081905092915050565b6000606082019050610c656000830186610ad0565b610c726020830185610ad0565b610c7f6040830184610c2a565b949350505050565b6000604082019050610c9c6000830185610ad0565b610ca96020830184610c2a565b9392505050565b6000602082019050610cc56000830184610b10565b92915050565b60006020820190508181036000830152610ce58184610b1f565b905092915050565b60006020820190508181036000830152610d0681610b58565b9050919050565b60006020820190508181036000830152610d2681610b7b565b9050919050565b60006020820190508181036000830152610d4681610b9e565b9050919050565b60006020820190508181036000830152610d6681610bc1565b9050919050565b60006020820190508181036000830152610d8681610be4565b9050919050565b60006020820190508181036000830152610da681610c07565b9050919050565b6000602082019050610dc26000830184610c2a565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610e0582610f4d565b9150610e1083610f4d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4557610e44610fae565b5b828201905092915050565b6000610e5b82610f4d565b9150610e6683610f4d565b925082610e7657610e75610fdd565b5b828204905092915050565b6000610e8c82610f4d565b9150610e9783610f4d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ed057610ecf610fae565b5b828202905092915050565b6000610ee682610f4d565b9150610ef183610f4d565b925082821015610f0457610f03610fae565b5b828203905092915050565b6000610f1a82610f2d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f6282610f69565b9050919050565b6000610f7482610f2d565b9050919050565b60005b83811015610f99578082015181840152602081019050610f7e565b83811115610fa8576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416d6f756e742073686f756c6420626967676572207468616e20300000000000600082015250565b7f4e6f20636c61696d61626c652068756e6472656420746f6b656e000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b61116881610f0f565b811461117357600080fd5b50565b61117f81610f21565b811461118a57600080fd5b50565b61119681610f4d565b81146111a157600080fd5b5056fea26469706673582212203271df3f047ef5491d9f16acccff94ad1184d10c369a2b360e8e2a3973131d0964736f6c63430008030033";
