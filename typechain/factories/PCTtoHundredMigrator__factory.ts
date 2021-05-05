/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PCTtoHundredMigrator } from "../PCTtoHundredMigrator";

export class PCTtoHundredMigrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pct: string,
    hundred: string,
    vesting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PCTtoHundredMigrator> {
    return super.deploy(
      pct,
      hundred,
      vesting,
      overrides || {}
    ) as Promise<PCTtoHundredMigrator>;
  }
  getDeployTransaction(
    pct: string,
    hundred: string,
    vesting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(pct, hundred, vesting, overrides || {});
  }
  attach(address: string): PCTtoHundredMigrator {
    return super.attach(address) as PCTtoHundredMigrator;
  }
  connect(signer: Signer): PCTtoHundredMigrator__factory {
    return super.connect(signer) as PCTtoHundredMigrator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCTtoHundredMigrator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PCTtoHundredMigrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "pct",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "hundred",
        type: "address",
      },
      {
        internalType: "address",
        name: "vesting",
        type: "address",
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
    inputs: [],
    name: "PCT",
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
    inputs: [],
    name: "PercentMax",
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
    inputs: [],
    name: "UserPercent",
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
    inputs: [],
    name: "Vesting",
    outputs: [
      {
        internalType: "contract HundredVesting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VestingPercent",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrateAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600a600155605a60025560646003553480156200002057600080fd5b506040516200125f3803806200125f833981810160405281019062000046919062000242565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040162000171929190620002ba565b602060405180830381600087803b1580156200018c57600080fd5b505af1158015620001a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c7919062000216565b5050505062000393565b600081519050620001e28162000345565b92915050565b600081519050620001f9816200035f565b92915050565b600081519050620002108162000379565b92915050565b6000602082840312156200022957600080fd5b60006200023984828501620001e8565b91505092915050565b6000806000606084860312156200025857600080fd5b60006200026886828701620001ff565b93505060206200027b86828701620001ff565b92505060406200028e86828701620001d1565b9150509250925092565b620002a381620002e7565b82525050565b620002b4816200033b565b82525050565b6000604082019050620002d1600083018562000298565b620002e06020830184620002a9565b9392505050565b6000620002f4826200031b565b9050919050565b60008115159050919050565b60006200031482620002e7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200035081620002e7565b81146200035c57600080fd5b50565b6200036a81620002fb565b81146200037657600080fd5b50565b620003848162000307565b81146200039057600080fd5b50565b60805160601c60a05160601c610e8b620003d460003960008181610284015261041c0152600081816101a80152818161026001526103270152610e8b6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634a77f8701161005b5780634a77f870146101035780639871ee021461010d578063b13ef3431461012b578063e0d5d5b71461014957610088565b806312bd39621461008d5780632104378a146100ab57806324b2b1f3146100c9578063454b0608146100e7575b600080fd5b610095610167565b6040516100a29190610a3c565b60405180910390f35b6100b361018b565b6040516100c09190610af9565b60405180910390f35b6100d1610191565b6040516100de9190610af9565b60405180910390f35b61010160048036038101906100fc919061080b565b610197565b005b61010b6101a4565b005b61011561025e565b6040516101229190610a3c565b60405180910390f35b610133610282565b6040516101409190610a21565b60405180910390f35b6101516102a6565b60405161015e9190610af9565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60015481565b6101a133826102ac565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016101ff91906109a6565b60206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f9190610834565b905061025b33826102ac565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b60008114156102f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e790610a99565b60405180910390fd5b6000600354600154836103039190610b77565b61030d9190610b46565b90506000818361031d9190610bd1565b905061036c8430857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166104ad909392919063ffffffff16565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85846040518363ffffffff1660e01b81526004016103c79291906109f8565b602060405180830381600087803b1580156103e157600080fd5b505af11580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041991906107e2565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663617f530885836040518363ffffffff1660e01b81526004016104759291906109f8565b600060405180830381600087803b15801561048f57600080fd5b505af11580156104a3573d6000803e3d6000fd5b5050505050505050565b610530846323b872dd60e01b8585856040516024016104ce939291906109c1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610536565b50505050565b6000610598826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105fd9092919063ffffffff16565b90506000815111156105f857808060200190518101906105b891906107e2565b6105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee90610ad9565b60405180910390fd5b5b505050565b606061060c8484600085610615565b90509392505050565b60608247101561065a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065190610a79565b60405180910390fd5b61066385610729565b6106a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069990610ab9565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516106cb919061098f565b60006040518083038185875af1925050503d8060008114610708576040519150601f19603f3d011682016040523d82523d6000602084013e61070d565b606091505b509150915061071d82828661073c565b92505050949350505050565b600080823b905060008111915050919050565b6060831561074c5782905061079c565b60008351111561075f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107939190610a57565b60405180910390fd5b9392505050565b6000815190506107b281610e27565b92915050565b6000813590506107c781610e3e565b92915050565b6000815190506107dc81610e3e565b92915050565b6000602082840312156107f457600080fd5b6000610802848285016107a3565b91505092915050565b60006020828403121561081d57600080fd5b600061082b848285016107b8565b91505092915050565b60006020828403121561084657600080fd5b6000610854848285016107cd565b91505092915050565b61086681610c05565b82525050565b600061087782610b14565b6108818185610b2a565b9350610891818560208601610c95565b80840191505092915050565b6108a681610c4d565b82525050565b6108b581610c71565b82525050565b60006108c682610b1f565b6108d08185610b35565b93506108e0818560208601610c95565b6108e981610d26565b840191505092915050565b6000610901602683610b35565b915061090c82610d37565b604082019050919050565b6000610924601b83610b35565b915061092f82610d86565b602082019050919050565b6000610947601d83610b35565b915061095282610daf565b602082019050919050565b600061096a602a83610b35565b915061097582610dd8565b604082019050919050565b61098981610c43565b82525050565b600061099b828461086c565b915081905092915050565b60006020820190506109bb600083018461085d565b92915050565b60006060820190506109d6600083018661085d565b6109e3602083018561085d565b6109f06040830184610980565b949350505050565b6000604082019050610a0d600083018561085d565b610a1a6020830184610980565b9392505050565b6000602082019050610a36600083018461089d565b92915050565b6000602082019050610a5160008301846108ac565b92915050565b60006020820190508181036000830152610a7181846108bb565b905092915050565b60006020820190508181036000830152610a92816108f4565b9050919050565b60006020820190508181036000830152610ab281610917565b9050919050565b60006020820190508181036000830152610ad28161093a565b9050919050565b60006020820190508181036000830152610af28161095d565b9050919050565b6000602082019050610b0e6000830184610980565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610b5182610c43565b9150610b5c83610c43565b925082610b6c57610b6b610cf7565b5b828204905092915050565b6000610b8282610c43565b9150610b8d83610c43565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610bc657610bc5610cc8565b5b828202905092915050565b6000610bdc82610c43565b9150610be783610c43565b925082821015610bfa57610bf9610cc8565b5b828203905092915050565b6000610c1082610c23565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c5882610c5f565b9050919050565b6000610c6a82610c23565b9050919050565b6000610c7c82610c83565b9050919050565b6000610c8e82610c23565b9050919050565b60005b83811015610cb3578082015181840152602081019050610c98565b83811115610cc2576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416d6f756e742073686f756c6420626967676572207468616e20300000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b610e3081610c17565b8114610e3b57600080fd5b50565b610e4781610c43565b8114610e5257600080fd5b5056fea2646970667358221220886192cd631f53d39c141fa1a9b7b87aaa5e14113160c8a97adcc2218d6342fa64736f6c63430008030033";
