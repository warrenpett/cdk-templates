// import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
// import * as lambda from 'aws-cdk-lib/aws-lambda'
// import { Construct } from "constructs";
// import path = require("path");
// import * as sns from "aws-cdk-lib/aws-sns";
// import { IStateMachine } from "aws-cdk-lib/aws-stepfunctions";
// import * as sns_subscriptions from "aws-cdk-lib/aws-sns-subscriptions"

// interface CDKTemplateLambdaFunctionProps extends NodejsFunctionProps {
//     stateMachine: IStateMachine
//     readonly topics: sns.Topic[]
// }

// export class CDKTemplateLambdaFunction extends NodejsFunction {
//     constructor(scope: Construct, id: string, props: CDKTemplateLambdaFunctionProps) {
//         super(scope, id, {
//             functionName: id,
//             entry: path.join(__dirname, 'code/index.ts'),
//             runtime: lambda.Runtime.NODEJS_14_X,
//             handler: "handler",
//             environment: {
//                 STATE_MACHINE_ARN: props.stateMachine.stateMachineArn,
//             },
            
//         },
//         )

//         props.stateMachine.grantStartExecution(this);

//         // TODO: pass lambda function as a prop
//         const subscription = new sns_subscriptions.LambdaSubscription(this);
//         for (const topic of props.topics) {
//           topic.addSubscription(subscription);
//         }

//     }
// }