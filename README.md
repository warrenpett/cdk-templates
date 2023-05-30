# CDK Templates

This project aims to create examples of as many AWS resources for basic deployment in a realistic architecture. 

## Resources

This project currently holds examples for:

- SQS (Simple Queue Service) with a queue and dead-letter queue for failed messages
- S3 (Simple Storage Service)
- In Progress: State Machine
- In Progress: SNS
- In Progress: Lambda
- In Progress: VPC
- In Progress: Subnets
- In Progress: Security Groups
- In Progress: EC2
- To Do: WAF

## Prerequisites

- Node.js [Node.js](https://nodejs.org/) installed.
- Docker [Docker](https://www.docker.com/) installed.
- AWS security credentials [](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html) configured.

## Dependencies

### AWS Resources

The service has resources within your AWS environment it depends on which are not created by deploying CDK.

## Installation

Run the following scripts to install the Node packages.

```shell
npm install
```


---

## Build

The project has been written in Typescript, however this is just a superset on the Javascript language so needs to be converted with the following script

```shell
npm run build
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Deploying this template in a new environment

1. Ensure the user has CLI access
2. Run the following command (This sets up some resources needed for cdk to deploy e.g. s3. Ignore if you have a custom or controlled environment)
```shell
cdk bootstrap
```
3. Run the following command to deploy the template
```shell
cdk deploy
```
4. Enjoy expanding your templates!