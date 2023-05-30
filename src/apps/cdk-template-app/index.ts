import * as cdk from 'aws-cdk-lib';
import { CdkTemplateInfrastructureStack } from '../../stacks/cdk-template'

const app = new cdk.App();
new CdkTemplateInfrastructureStack(app, 'CdkTemplateInfrastructureStack');