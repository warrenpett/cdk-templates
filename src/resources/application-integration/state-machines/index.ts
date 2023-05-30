// import * as cdk from "aws-cdk-lib";
// import * as sfn from "aws-cdk-lib/aws-stepfunctions"
// import { Construct } from "constructs"

// export interface CDKTemplateStateMachineProps extends sfn.StateMachineProps {
//     definition: any
// }
// export class CDKTemplateStateMachine extends sfn.StateMachine {
//   constructor(scope: Construct, id: string, props: CDKTemplateStateMachineProps) {
//     super(scope, id, props);

//     // In the future this state machine will do some work...
//     new sfn.StateMachine(this, "StateMachine", {
//       definition: new sfn.Pass(this, "StartState"),
//     });
//   }
// }