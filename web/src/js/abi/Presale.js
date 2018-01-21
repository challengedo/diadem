export default {
  "contractName": "Presale",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "cap",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "weiRaised",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "wallet",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "hasEnded",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "purchaser",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenPurchase",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052683635c9adc5dea000006002556109c4600355635a612eee6004556360570fee600555610123600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550341561007557600080fd5b60405160208061070783398101604052808051906020019091905050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610626806100e16000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c4e722e146100a45780633197cbb6146100cd578063355274ea146100f65780634042b66f1461011f578063521eb2731461014857806378e979251461019d578063ec8ac4d8146101c6578063ecb70fb7146101f4578063fc0c546a14610221575b6100a233610276565b005b34156100af57600080fd5b6100b761045f565b6040518082815260200191505060405180910390f35b34156100d857600080fd5b6100e0610465565b6040518082815260200191505060405180910390f35b341561010157600080fd5b61010961046b565b6040518082815260200191505060405180910390f35b341561012a57600080fd5b610132610471565b6040518082815260200191505060405180910390f35b341561015357600080fd5b61015b610477565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a857600080fd5b6101b061049d565b6040518082815260200191505060405180910390f35b6101f2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610276565b005b34156101ff57600080fd5b6102076104a3565b604051808215151515815260200191505060405180910390f35b341561022c57600080fd5b6102346104be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156102b557600080fd5b6102bd6104e3565b15156102c857600080fd5b3491506102e06003548361053d90919063ffffffff16565b90506102f78260015461057890919063ffffffff16565b6001819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1984836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156103c957600080fd5b6102c65a03f115156103da57600080fd5b50505060405180519050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a361045a610596565b505050565b60035481565b60055481565b60025481565b60015481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60006005544211806104b9575060025460015410155b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060045442101580156104fd57506005544211155b92506000341415915060025461051e3460015461057890919063ffffffff16565b1115905082801561052c5750815b80156105355750805b935050505090565b60008060008414156105525760009150610571565b828402905082848281151561056357fe5b0414151561056d57fe5b8091505b5092915050565b600080828401905083811015151561058c57fe5b8091505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015156105f857600080fd5b5600a165627a7a72305820a1ad18f534e43302340f899c49574110fa6ffef08398b18644f78ddcb705dfc50029",
  "deployedBytecode": "0x606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632c4e722e146100a45780633197cbb6146100cd578063355274ea146100f65780634042b66f1461011f578063521eb2731461014857806378e979251461019d578063ec8ac4d8146101c6578063ecb70fb7146101f4578063fc0c546a14610221575b6100a233610276565b005b34156100af57600080fd5b6100b761045f565b6040518082815260200191505060405180910390f35b34156100d857600080fd5b6100e0610465565b6040518082815260200191505060405180910390f35b341561010157600080fd5b61010961046b565b6040518082815260200191505060405180910390f35b341561012a57600080fd5b610132610471565b6040518082815260200191505060405180910390f35b341561015357600080fd5b61015b610477565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a857600080fd5b6101b061049d565b6040518082815260200191505060405180910390f35b6101f2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610276565b005b34156101ff57600080fd5b6102076104a3565b604051808215151515815260200191505060405180910390f35b341561022c57600080fd5b6102346104be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156102b557600080fd5b6102bd6104e3565b15156102c857600080fd5b3491506102e06003548361053d90919063ffffffff16565b90506102f78260015461057890919063ffffffff16565b6001819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1984836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156103c957600080fd5b6102c65a03f115156103da57600080fd5b50505060405180519050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a361045a610596565b505050565b60035481565b60055481565b60025481565b60015481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60006005544211806104b9575060025460015410155b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060045442101580156104fd57506005544211155b92506000341415915060025461051e3460015461057890919063ffffffff16565b1115905082801561052c5750815b80156105355750805b935050505090565b60008060008414156105525760009150610571565b828402905082848281151561056357fe5b0414151561056d57fe5b8091505b5092915050565b600080828401905083811015151561058c57fe5b8091505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015156105f857600080fd5b5600a165627a7a72305820a1ad18f534e43302340f899c49574110fa6ffef08398b18644f78ddcb705dfc50029",
  "sourceMap": "106:1477:2:-;;;240:10;219:31;;278:4;256:26;;312:10;288:34;;350:10;328:32;;391:5;367:29;;;;;;;;;;;;;;;;;;;;516:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;581:6;566:5;;:22;;;;;;;;;;;;;;;;;;516:79;106:1477;;;;;;",
  "deployedSourceMap": "106:1477:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;640:21;650:10;640:9;:21::i;:::-;106:1477;256:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;328:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;219:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;188:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;367:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;288:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:409;;;;;;;;;;;;;;;;;;;;1473:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;162:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:409;818:17;858:14;770:1;747:25;;:11;:25;;;;739:34;;;;;;;;791:15;:13;:15::i;:::-;783:24;;;;;;;;838:9;818:29;;875:19;889:4;;875:9;:13;;:19;;;;:::i;:::-;858:36;;917:24;931:9;917;;:13;;:24;;;;:::i;:::-;905:9;:36;;;;952:5;;;;;;;;;;;:10;;;963:11;976:6;952:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1020:11;994:57;;1008:10;994:57;;;1033:9;1044:6;994:57;;;;;;;;;;;;;;;;;;;;;;;;1062:14;:12;:14::i;:::-;674:409;;;:::o;256:26::-;;;;:::o;328:32::-;;;;:::o;219:31::-;;;;:::o;188:24::-;;;;:::o;367:29::-;;;;;;;;;;;;;:::o;288:34::-;;;;:::o;1473:108::-;1518:4;1547:7;;1541:3;:13;:33;;;;1571:3;;1558:9;;:16;;1541:33;1534:40;;1473:108;:::o;162:19::-;;;;;;;;;;;;;:::o;1171:296::-;1223:4;1239:17;1303:20;1350:14;1266:9;;1259:3;:16;;:34;;;;;1286:7;;1279:3;:14;;1259:34;1239:54;;1339:1;1326:9;:14;;1303:37;;1395:3;;1367:24;1381:9;1367;;:13;;:24;;;;:::i;:::-;:31;;1350:48;;1416:12;:31;;;;;1432:15;1416:31;:44;;;;;1451:9;1416:44;1409:51;;1171:296;;;;:::o;138:173:3:-;196:7;251:9;220:1;215;:6;211:35;;;238:1;231:8;;;;211:35;267:1;263;:5;251:17;;290:1;285;281;:5;;;;;;;;:10;274:18;;;;;;305:1;298:8;;138:173;;;;;;:::o;698:129::-;756:7;771:9;787:1;783;:5;771:17;;806:1;801;:6;;794:14;;;;;;821:1;814:8;;698:129;;;;;:::o;1089:76:2:-;1132:6;;;;;;;;;;;:15;;:26;1148:9;1132:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1089:76::o",
  "source": "pragma solidity ^0.4.18;\n\nimport 'zeppelin-solidity/contracts/math/SafeMath.sol';\nimport './Diadem.sol';\n\ncontract Presale {\n    using SafeMath for uint256;\n\n    Diadem public token;\n\n    uint256 public weiRaised;\n\n    uint256 public cap = 1000 ether;\n    uint256 public rate = 2500;\n    uint public startTime = 1516318446;\n    uint public endTime = 1616318446;\n\n    address public wallet = 0x123;\n\n    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);\n\n    function Presale(address _token) public {\n        token = Diadem(_token);\n    }\n\n    function () external payable {\n        buyTokens(msg.sender);\n    }\n\n    function buyTokens(address beneficiary) public payable {\n        require(beneficiary != address(0));\n        require(validPurchase());\n\n        uint256 weiAmount = msg.value;\n\n        uint256 tokens = weiAmount.mul(rate);\n\n        weiRaised = weiRaised.add(weiAmount);\n\n        token.mint(beneficiary, tokens);\n\n        TokenPurchase(msg.sender, beneficiary, weiAmount, tokens);\n\n        forwardFunds();\n    }\n\n    function forwardFunds() internal {\n        wallet.transfer(msg.value);\n    }\n\n    function validPurchase() internal constant returns (bool) {\n        bool withinPeriod = now >= startTime && now <= endTime;\n        bool nonZeroPurchase = msg.value != 0;\n        bool withinCap = weiRaised.add(msg.value) <= cap;\n\n        return withinPeriod && nonZeroPurchase && withinCap;\n    }\n\n    function hasEnded() public constant returns (bool) {\n        return now > endTime || weiRaised >= cap;\n    }\n}",
  "sourcePath": "/home/sevenflash/apps/grommet/challenge/contracts/Presale.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/home/sevenflash/apps/grommet/challenge/contracts/Presale.sol",
      "exportedSymbols": {
        "Presale": [
          365
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 189,
        "name": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "attributes": {
          "SourceUnit": 464,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 366,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 190,
        "name": "ImportDirective",
        "src": "26:55:2"
      },
      {
        "attributes": {
          "SourceUnit": 131,
          "absolutePath": "/home/sevenflash/apps/grommet/challenge/contracts/Diadem.sol",
          "file": "./Diadem.sol",
          "scope": 366,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 191,
        "name": "ImportDirective",
        "src": "82:22:2"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            365
          ],
          "name": "Presale",
          "scope": 366
        },
        "children": [
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 463,
                  "type": "library SafeMath"
                },
                "id": 192,
                "name": "UserDefinedTypeName",
                "src": "135:8:2"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 193,
                "name": "ElementaryTypeName",
                "src": "148:7:2"
              }
            ],
            "id": 194,
            "name": "UsingForDirective",
            "src": "129:27:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "token",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract Diadem",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Diadem",
                  "referencedDeclaration": 130,
                  "type": "contract Diadem"
                },
                "id": 195,
                "name": "UserDefinedTypeName",
                "src": "162:6:2"
              }
            ],
            "id": 196,
            "name": "VariableDeclaration",
            "src": "162:19:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "weiRaised",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 197,
                "name": "ElementaryTypeName",
                "src": "188:7:2"
              }
            ],
            "id": 198,
            "name": "VariableDeclaration",
            "src": "188:24:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "cap",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 199,
                "name": "ElementaryTypeName",
                "src": "219:7:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "31303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": "ether",
                  "token": "number",
                  "type": "int_const 1000000000000000000000",
                  "value": "1000"
                },
                "id": 200,
                "name": "Literal",
                "src": "240:10:2"
              }
            ],
            "id": 201,
            "name": "VariableDeclaration",
            "src": "219:31:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "rate",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 202,
                "name": "ElementaryTypeName",
                "src": "256:7:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "32353030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 2500",
                  "value": "2500"
                },
                "id": 203,
                "name": "Literal",
                "src": "278:4:2"
              }
            ],
            "id": 204,
            "name": "VariableDeclaration",
            "src": "256:26:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "startTime",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 205,
                "name": "ElementaryTypeName",
                "src": "288:4:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "31353136333138343436",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 1516318446",
                  "value": "1516318446"
                },
                "id": 206,
                "name": "Literal",
                "src": "312:10:2"
              }
            ],
            "id": 207,
            "name": "VariableDeclaration",
            "src": "288:34:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "endTime",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 208,
                "name": "ElementaryTypeName",
                "src": "328:4:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "31363136333138343436",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 1616318446",
                  "value": "1616318446"
                },
                "id": 209,
                "name": "Literal",
                "src": "350:10:2"
              }
            ],
            "id": 210,
            "name": "VariableDeclaration",
            "src": "328:32:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "wallet",
              "scope": 365,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 211,
                "name": "ElementaryTypeName",
                "src": "367:7:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3078313233",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 291",
                  "value": "0x123"
                },
                "id": 212,
                "name": "Literal",
                "src": "391:5:2"
              }
            ],
            "id": 213,
            "name": "VariableDeclaration",
            "src": "367:29:2"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "TokenPurchase"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "purchaser",
                      "scope": 223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 214,
                        "name": "ElementaryTypeName",
                        "src": "423:7:2"
                      }
                    ],
                    "id": 215,
                    "name": "VariableDeclaration",
                    "src": "423:25:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 216,
                        "name": "ElementaryTypeName",
                        "src": "450:7:2"
                      }
                    ],
                    "id": 217,
                    "name": "VariableDeclaration",
                    "src": "450:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 218,
                        "name": "ElementaryTypeName",
                        "src": "479:7:2"
                      }
                    ],
                    "id": 219,
                    "name": "VariableDeclaration",
                    "src": "479:13:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 223,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 220,
                        "name": "ElementaryTypeName",
                        "src": "494:7:2"
                      }
                    ],
                    "id": 221,
                    "name": "VariableDeclaration",
                    "src": "494:14:2"
                  }
                ],
                "id": 222,
                "name": "ParameterList",
                "src": "422:87:2"
              }
            ],
            "id": 223,
            "name": "EventDefinition",
            "src": "403:107:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Presale",
              "payable": false,
              "scope": 365,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_token",
                      "scope": 235,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 224,
                        "name": "ElementaryTypeName",
                        "src": "533:7:2"
                      }
                    ],
                    "id": 225,
                    "name": "VariableDeclaration",
                    "src": "533:14:2"
                  }
                ],
                "id": 226,
                "name": "ParameterList",
                "src": "532:16:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 227,
                "name": "ParameterList",
                "src": "556:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract Diadem"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 196,
                              "type": "contract Diadem",
                              "value": "token"
                            },
                            "id": 228,
                            "name": "Identifier",
                            "src": "566:5:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract Diadem",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 130,
                                  "type": "type(contract Diadem)",
                                  "value": "Diadem"
                                },
                                "id": 229,
                                "name": "Identifier",
                                "src": "574:6:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 225,
                                  "type": "address",
                                  "value": "_token"
                                },
                                "id": 230,
                                "name": "Identifier",
                                "src": "581:6:2"
                              }
                            ],
                            "id": 231,
                            "name": "FunctionCall",
                            "src": "574:14:2"
                          }
                        ],
                        "id": 232,
                        "name": "Assignment",
                        "src": "566:22:2"
                      }
                    ],
                    "id": 233,
                    "name": "ExpressionStatement",
                    "src": "566:22:2"
                  }
                ],
                "id": 234,
                "name": "Block",
                "src": "556:39:2"
              }
            ],
            "id": 235,
            "name": "FunctionDefinition",
            "src": "516:79:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "",
              "payable": true,
              "scope": 365,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 236,
                "name": "ParameterList",
                "src": "610:2:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 237,
                "name": "ParameterList",
                "src": "630:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 300,
                              "type": "function (address)",
                              "value": "buyTokens"
                            },
                            "id": 238,
                            "name": "Identifier",
                            "src": "640:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 935,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 239,
                                "name": "Identifier",
                                "src": "650:3:2"
                              }
                            ],
                            "id": 240,
                            "name": "MemberAccess",
                            "src": "650:10:2"
                          }
                        ],
                        "id": 241,
                        "name": "FunctionCall",
                        "src": "640:21:2"
                      }
                    ],
                    "id": 242,
                    "name": "ExpressionStatement",
                    "src": "640:21:2"
                  }
                ],
                "id": 243,
                "name": "Block",
                "src": "630:38:2"
              }
            ],
            "id": 244,
            "name": "FunctionDefinition",
            "src": "601:67:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "buyTokens",
              "payable": true,
              "scope": 365,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 300,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 245,
                        "name": "ElementaryTypeName",
                        "src": "693:7:2"
                      }
                    ],
                    "id": 246,
                    "name": "VariableDeclaration",
                    "src": "693:19:2"
                  }
                ],
                "id": 247,
                "name": "ParameterList",
                "src": "692:21:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 248,
                "name": "ParameterList",
                "src": "729:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 938,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 249,
                            "name": "Identifier",
                            "src": "739:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 246,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 250,
                                "name": "Identifier",
                                "src": "747:11:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 251,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "762:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 252,
                                    "name": "Literal",
                                    "src": "770:1:2"
                                  }
                                ],
                                "id": 253,
                                "name": "FunctionCall",
                                "src": "762:10:2"
                              }
                            ],
                            "id": 254,
                            "name": "BinaryOperation",
                            "src": "747:25:2"
                          }
                        ],
                        "id": 255,
                        "name": "FunctionCall",
                        "src": "739:34:2"
                      }
                    ],
                    "id": 256,
                    "name": "ExpressionStatement",
                    "src": "739:34:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 938,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 257,
                            "name": "Identifier",
                            "src": "783:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 350,
                                  "type": "function () view returns (bool)",
                                  "value": "validPurchase"
                                },
                                "id": 258,
                                "name": "Identifier",
                                "src": "791:13:2"
                              }
                            ],
                            "id": 259,
                            "name": "FunctionCall",
                            "src": "791:15:2"
                          }
                        ],
                        "id": 260,
                        "name": "FunctionCall",
                        "src": "783:24:2"
                      }
                    ],
                    "id": 261,
                    "name": "ExpressionStatement",
                    "src": "783:24:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        263
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "weiAmount",
                          "scope": 300,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 262,
                            "name": "ElementaryTypeName",
                            "src": "818:7:2"
                          }
                        ],
                        "id": 263,
                        "name": "VariableDeclaration",
                        "src": "818:17:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "value",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 935,
                              "type": "msg",
                              "value": "msg"
                            },
                            "id": 264,
                            "name": "Identifier",
                            "src": "838:3:2"
                          }
                        ],
                        "id": 265,
                        "name": "MemberAccess",
                        "src": "838:9:2"
                      }
                    ],
                    "id": 266,
                    "name": "VariableDeclarationStatement",
                    "src": "818:29:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        268
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "tokens",
                          "scope": 300,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 267,
                            "name": "ElementaryTypeName",
                            "src": "858:7:2"
                          }
                        ],
                        "id": 268,
                        "name": "VariableDeclaration",
                        "src": "858:14:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mul",
                              "referencedDeclaration": 400,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 263,
                                  "type": "uint256",
                                  "value": "weiAmount"
                                },
                                "id": 269,
                                "name": "Identifier",
                                "src": "875:9:2"
                              }
                            ],
                            "id": 270,
                            "name": "MemberAccess",
                            "src": "875:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 204,
                              "type": "uint256",
                              "value": "rate"
                            },
                            "id": 271,
                            "name": "Identifier",
                            "src": "889:4:2"
                          }
                        ],
                        "id": 272,
                        "name": "FunctionCall",
                        "src": "875:19:2"
                      }
                    ],
                    "id": 273,
                    "name": "VariableDeclarationStatement",
                    "src": "858:36:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 198,
                              "type": "uint256",
                              "value": "weiRaised"
                            },
                            "id": 274,
                            "name": "Identifier",
                            "src": "905:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 462,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 198,
                                      "type": "uint256",
                                      "value": "weiRaised"
                                    },
                                    "id": 275,
                                    "name": "Identifier",
                                    "src": "917:9:2"
                                  }
                                ],
                                "id": 276,
                                "name": "MemberAccess",
                                "src": "917:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 263,
                                  "type": "uint256",
                                  "value": "weiAmount"
                                },
                                "id": 277,
                                "name": "Identifier",
                                "src": "931:9:2"
                              }
                            ],
                            "id": 278,
                            "name": "FunctionCall",
                            "src": "917:24:2"
                          }
                        ],
                        "id": 279,
                        "name": "Assignment",
                        "src": "905:36:2"
                      }
                    ],
                    "id": 280,
                    "name": "ExpressionStatement",
                    "src": "905:36:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mint",
                              "referencedDeclaration": 70,
                              "type": "function (address,uint256) external returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 196,
                                  "type": "contract Diadem",
                                  "value": "token"
                                },
                                "id": 281,
                                "name": "Identifier",
                                "src": "952:5:2"
                              }
                            ],
                            "id": 283,
                            "name": "MemberAccess",
                            "src": "952:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 246,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 284,
                            "name": "Identifier",
                            "src": "963:11:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 268,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 285,
                            "name": "Identifier",
                            "src": "976:6:2"
                          }
                        ],
                        "id": 286,
                        "name": "FunctionCall",
                        "src": "952:31:2"
                      }
                    ],
                    "id": 287,
                    "name": "ExpressionStatement",
                    "src": "952:31:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 223,
                              "type": "function (address,address,uint256,uint256)",
                              "value": "TokenPurchase"
                            },
                            "id": 288,
                            "name": "Identifier",
                            "src": "994:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 935,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 289,
                                "name": "Identifier",
                                "src": "1008:3:2"
                              }
                            ],
                            "id": 290,
                            "name": "MemberAccess",
                            "src": "1008:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 246,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 291,
                            "name": "Identifier",
                            "src": "1020:11:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 263,
                              "type": "uint256",
                              "value": "weiAmount"
                            },
                            "id": 292,
                            "name": "Identifier",
                            "src": "1033:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 268,
                              "type": "uint256",
                              "value": "tokens"
                            },
                            "id": 293,
                            "name": "Identifier",
                            "src": "1044:6:2"
                          }
                        ],
                        "id": 294,
                        "name": "FunctionCall",
                        "src": "994:57:2"
                      }
                    ],
                    "id": 295,
                    "name": "ExpressionStatement",
                    "src": "994:57:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 311,
                              "type": "function ()",
                              "value": "forwardFunds"
                            },
                            "id": 296,
                            "name": "Identifier",
                            "src": "1062:12:2"
                          }
                        ],
                        "id": 297,
                        "name": "FunctionCall",
                        "src": "1062:14:2"
                      }
                    ],
                    "id": 298,
                    "name": "ExpressionStatement",
                    "src": "1062:14:2"
                  }
                ],
                "id": 299,
                "name": "Block",
                "src": "729:354:2"
              }
            ],
            "id": 300,
            "name": "FunctionDefinition",
            "src": "674:409:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "forwardFunds",
              "payable": false,
              "scope": 365,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 301,
                "name": "ParameterList",
                "src": "1110:2:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 302,
                "name": "ParameterList",
                "src": "1122:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transfer",
                              "referencedDeclaration": null,
                              "type": "function (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 213,
                                  "type": "address",
                                  "value": "wallet"
                                },
                                "id": 303,
                                "name": "Identifier",
                                "src": "1132:6:2"
                              }
                            ],
                            "id": 305,
                            "name": "MemberAccess",
                            "src": "1132:15:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 935,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 306,
                                "name": "Identifier",
                                "src": "1148:3:2"
                              }
                            ],
                            "id": 307,
                            "name": "MemberAccess",
                            "src": "1148:9:2"
                          }
                        ],
                        "id": 308,
                        "name": "FunctionCall",
                        "src": "1132:26:2"
                      }
                    ],
                    "id": 309,
                    "name": "ExpressionStatement",
                    "src": "1132:26:2"
                  }
                ],
                "id": 310,
                "name": "Block",
                "src": "1122:43:2"
              }
            ],
            "id": 311,
            "name": "FunctionDefinition",
            "src": "1089:76:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "validPurchase",
              "payable": false,
              "scope": 365,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 312,
                "name": "ParameterList",
                "src": "1193:2:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 350,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 313,
                        "name": "ElementaryTypeName",
                        "src": "1223:4:2"
                      }
                    ],
                    "id": 314,
                    "name": "VariableDeclaration",
                    "src": "1223:4:2"
                  }
                ],
                "id": 315,
                "name": "ParameterList",
                "src": "1222:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        317
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "withinPeriod",
                          "scope": 350,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 316,
                            "name": "ElementaryTypeName",
                            "src": "1239:4:2"
                          }
                        ],
                        "id": 317,
                        "name": "VariableDeclaration",
                        "src": "1239:17:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 937,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 318,
                                "name": "Identifier",
                                "src": "1259:3:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 207,
                                  "type": "uint256",
                                  "value": "startTime"
                                },
                                "id": 319,
                                "name": "Identifier",
                                "src": "1266:9:2"
                              }
                            ],
                            "id": 320,
                            "name": "BinaryOperation",
                            "src": "1259:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 937,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 321,
                                "name": "Identifier",
                                "src": "1279:3:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 210,
                                  "type": "uint256",
                                  "value": "endTime"
                                },
                                "id": 322,
                                "name": "Identifier",
                                "src": "1286:7:2"
                              }
                            ],
                            "id": 323,
                            "name": "BinaryOperation",
                            "src": "1279:14:2"
                          }
                        ],
                        "id": 324,
                        "name": "BinaryOperation",
                        "src": "1259:34:2"
                      }
                    ],
                    "id": 325,
                    "name": "VariableDeclarationStatement",
                    "src": "1239:54:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        327
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "nonZeroPurchase",
                          "scope": 350,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 326,
                            "name": "ElementaryTypeName",
                            "src": "1303:4:2"
                          }
                        ],
                        "id": 327,
                        "name": "VariableDeclaration",
                        "src": "1303:20:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "value",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 935,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 328,
                                "name": "Identifier",
                                "src": "1326:3:2"
                              }
                            ],
                            "id": 329,
                            "name": "MemberAccess",
                            "src": "1326:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 330,
                            "name": "Literal",
                            "src": "1339:1:2"
                          }
                        ],
                        "id": 331,
                        "name": "BinaryOperation",
                        "src": "1326:14:2"
                      }
                    ],
                    "id": 332,
                    "name": "VariableDeclarationStatement",
                    "src": "1303:37:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        334
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "withinCap",
                          "scope": 350,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 333,
                            "name": "ElementaryTypeName",
                            "src": "1350:4:2"
                          }
                        ],
                        "id": 334,
                        "name": "VariableDeclaration",
                        "src": "1350:14:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 462,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 198,
                                      "type": "uint256",
                                      "value": "weiRaised"
                                    },
                                    "id": 335,
                                    "name": "Identifier",
                                    "src": "1367:9:2"
                                  }
                                ],
                                "id": 336,
                                "name": "MemberAccess",
                                "src": "1367:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 935,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 337,
                                    "name": "Identifier",
                                    "src": "1381:3:2"
                                  }
                                ],
                                "id": 338,
                                "name": "MemberAccess",
                                "src": "1381:9:2"
                              }
                            ],
                            "id": 339,
                            "name": "FunctionCall",
                            "src": "1367:24:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 201,
                              "type": "uint256",
                              "value": "cap"
                            },
                            "id": 340,
                            "name": "Identifier",
                            "src": "1395:3:2"
                          }
                        ],
                        "id": 341,
                        "name": "BinaryOperation",
                        "src": "1367:31:2"
                      }
                    ],
                    "id": 342,
                    "name": "VariableDeclarationStatement",
                    "src": "1350:48:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 315
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&&",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 317,
                                  "type": "bool",
                                  "value": "withinPeriod"
                                },
                                "id": 343,
                                "name": "Identifier",
                                "src": "1416:12:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 327,
                                  "type": "bool",
                                  "value": "nonZeroPurchase"
                                },
                                "id": 344,
                                "name": "Identifier",
                                "src": "1432:15:2"
                              }
                            ],
                            "id": 345,
                            "name": "BinaryOperation",
                            "src": "1416:31:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 334,
                              "type": "bool",
                              "value": "withinCap"
                            },
                            "id": 346,
                            "name": "Identifier",
                            "src": "1451:9:2"
                          }
                        ],
                        "id": 347,
                        "name": "BinaryOperation",
                        "src": "1416:44:2"
                      }
                    ],
                    "id": 348,
                    "name": "Return",
                    "src": "1409:51:2"
                  }
                ],
                "id": 349,
                "name": "Block",
                "src": "1229:238:2"
              }
            ],
            "id": 350,
            "name": "FunctionDefinition",
            "src": "1171:296:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "hasEnded",
              "payable": false,
              "scope": 365,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 351,
                "name": "ParameterList",
                "src": "1490:2:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 364,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 352,
                        "name": "ElementaryTypeName",
                        "src": "1518:4:2"
                      }
                    ],
                    "id": 353,
                    "name": "VariableDeclaration",
                    "src": "1518:4:2"
                  }
                ],
                "id": 354,
                "name": "ParameterList",
                "src": "1517:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 354
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 937,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 355,
                                "name": "Identifier",
                                "src": "1541:3:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 210,
                                  "type": "uint256",
                                  "value": "endTime"
                                },
                                "id": 356,
                                "name": "Identifier",
                                "src": "1547:7:2"
                              }
                            ],
                            "id": 357,
                            "name": "BinaryOperation",
                            "src": "1541:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 198,
                                  "type": "uint256",
                                  "value": "weiRaised"
                                },
                                "id": 358,
                                "name": "Identifier",
                                "src": "1558:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 201,
                                  "type": "uint256",
                                  "value": "cap"
                                },
                                "id": 359,
                                "name": "Identifier",
                                "src": "1571:3:2"
                              }
                            ],
                            "id": 360,
                            "name": "BinaryOperation",
                            "src": "1558:16:2"
                          }
                        ],
                        "id": 361,
                        "name": "BinaryOperation",
                        "src": "1541:33:2"
                      }
                    ],
                    "id": 362,
                    "name": "Return",
                    "src": "1534:40:2"
                  }
                ],
                "id": 363,
                "name": "Block",
                "src": "1524:57:2"
              }
            ],
            "id": 364,
            "name": "FunctionDefinition",
            "src": "1473:108:2"
          }
        ],
        "id": 365,
        "name": "ContractDefinition",
        "src": "106:1477:2"
      }
    ],
    "id": 366,
    "name": "SourceUnit",
    "src": "0:1583:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1516350568837": {
      "events": {},
      "links": {},
      "address": "0x4d91fd00c74135346c05e4fd62d19763376e1d59"
    },
    "3": {
      "events": {},
      "links": {},
      "address": "0xf8372fd57db31a62ac999daf15422351907cbe28"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-19T08:38:54.031Z"
}