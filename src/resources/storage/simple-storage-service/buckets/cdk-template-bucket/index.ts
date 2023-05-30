import { RemovalPolicy } from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

export class CDKTemplateBucket extends s3.Bucket {
    constructor(scope: Construct, id: string) {
      super(scope, id);
  
      new s3.Bucket(this, 'cdk-template-bucket', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            encryption: s3.BucketEncryption.S3_MANAGED,
            removalPolicy: RemovalPolicy.DESTROY
      });
    }
  }