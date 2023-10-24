const quizArray = [
    {
      id: "0",
      question: "What advantages does a database administrator obtain by using the Amazon Relational Database Service (RDS)?",
      options: ["RDS provides 99.99999999999% reliability and durability.", "RDS databases automatically scale based on load.", "RDS simplifies relational database administration tasks.",
       "RDS enables users to dynamically adjust CPU and RAM resources."],
      correct: "RDS simplifies relational database administration tasks.",
      
    },
    {
      id: "1",
      question: "A Cloud Practitioner requires point-in-time recovery (PITR) for an Amazon DynamoDB table. Who is responsible for configuring and performing backups?",
      options: ["AWS is responsible for both tasks.", "The customer is responsible for configuring and AWS is responsible for performing backups.", "The customer is responsible for both tasks", "AWS is responsible for configuring and the user is responsible for performing backups."],
      correct: "The customer is responsible for configuring and AWS is responsible for performing backups.",
    },
    {
      id: "2",
      question: "A large company is interested in avoiding long-term contracts and moving from fixed costs to variable costs. What is the value proposition of AWS for this company?",
      options: ["Automated cost optimization", "Volume pricing discounts", "Economies of scale", "Pay-as-you-go pricing"],
      correct: "Pay-as-you-go pricing",
    },
    {
      id: "3",
      question: "A customer needs to determine Total Cost of Ownership (TCO) for a workload that requires physical isolation. Which hosting model should be accounted for?",
      options: ["Dedicated Hosts", " Reserved Instances", " On-Demand Instances", "Spot Instances"],
      correct: "Dedicated Hosts",
    },
    {
      id: "4",
      question: "Which resource should a new user on AWS use to get help with deploying popular technologies based on AWS best practices, including architecture and deployment instructions?",
      options: [" AWS Artifact", "AWS Quick Starts","AWS Config","AWS CloudFormation"],
      correct: "AWS Quick Starts",
    },
    {
      id: "5",
      question: "Which tasks can a user complete using the AWS Cost Management tools? (Select TWO.)",
      options: ["Automatically terminate AWS resources if budget thresholds are exceeded. & Break down AWS costs by day, service, and linked AWS account.", "Break down AWS costs by day, service, and linked AWS account. & Create budgets and receive notifications if current or forecasted usage exceeds the budgets.","Launch either EC2 Spot instances or On-Demand instances based on the current pricing. & Move data stored in Amazon S3 Standard to an archiving storage class to reduce cost.","Automatically terminate AWS resources if budget thresholds are exceeded. & Launch either EC2 Spot instances or On-Demand instances based on the current pricing. "],
      correct: "Break down AWS costs by day, service, and linked AWS account. & Create budgets and receive notifications if current or forecasted usage exceeds the budgets.",
    },
    {
      id: "6",
      question: "Which of the following AWS services are compute services? (Select TWO.)",
      options: ["AWS Batch & AWS Elastic Beanstalk", "AWS CloudTrail & AWS Elastic Beanstalk","AWS Batch & Amazon EFS","Amazon Inspector & AWS Elastic Beanstalk"],
      correct: "AWS Batch & AWS Elastic Beanstalk",
    },
    {
      id: "7",
      question: "Which design principles are enabled by the AWS Cloud to improve the operation of workloads? (Select TWO.)",
      options: ["Loose coupling & Minimum viable product", "Loose coupling & Remove single points of failure","Customized hardware & Remove single points of failure","Minimize platform design & Minimum viable product"],
      correct: "Loose coupling & Remove single points of failure",
    },
    {
      id: "8",
      question: "A user is planning to launch three EC2 instances behind a single Elastic Load Balancer. The deployment should be highly available?",
      options: ["Launch the instances as EC2 Spot Instances in the same AWS Region and the same Availability Zone.", "Launch the instances as EC2 Reserved Instances in the same AWS Region, but in different Availability","Launch the instances in multiple AWS Regions, and use Elastic IP addresses.","Launch the instances across multiple Availability Zones in a single AWS Region"],
      correct: "Launch the instances across multiple Availability Zones in a single AWS Region",
    },
    {
      id: "9",
      question: "A company needs to publish messages to a thousands of subscribers simultaneously using a push mechanism. Which AWS service should the company use?",
      options: ["Amazon Simple Queue Service (Amazon SQS)", "Amazon Simple Notification Service (Amazon SNS)","AWS Step Functions","Amazon Simple Workflow Service (SWF)"],
      correct: "Amazon Simple Notification Service (Amazon SNS)",
    },
    {
      id: "10",
      question: "A company uses Amazon EC2 instances to run applications that are dedicated to different departments. The company needs to break out the costs of these applications and allocate them to the relevant department. The EC2 instances run in a single VPC.How can the company achieve these requirements?",
      options: ["Enable billing alerts through Amazon CloudWatch and Amazon SNS.", "Add additional Amazon VPCs and launch each application in a separate VPC.","Create tags by department on the instances and then run a cost allocation report.","Enable billing access for IAM users and view the costs in Cost Explorer."],
      correct: "Create tags by department on the instances and then run a cost allocation report.",
    },
    {
      id: "11",
      question: "A company is launching a new website which is expected to have highly variable levels of traffic. The website will run on Amazon EC2 and must be highly available. What is the MOST cost-effective approach?",
      options: ["Launch the website using an Amazon EC2 instance running on a dedicated host", "Use the AWS CLI to launch and terminate Amazon EC2 instances to match demand.","Determine the highest expected traffic and use an appropriate instance type.","Create an Amazon EC2 Auto Scaling group and configure an Elastic Load Balancer."],
      correct: "Create an Amazon EC2 Auto Scaling group and configure an Elastic Load Balancer.",
    },
    {
      id: "12",
      question: "Which of the following statements best describes the concept of agility in relation to cloud computing on AWS? (Select TWO.)",
      options: ["The speed at which AWS rolls out new features. & The elimination of wasted capacity.", "The elimination of wasted capacity. & The ability to automatically scale capacity.","The speed at which AWS resources can be created. & The ability to experiment quickly.","The speed at which AWS rolls out new features. & The speed at which AWS resources can be created."],
      correct: "The speed at which AWS resources can be created. & The ability to experiment quickly.",
    },
    {
      id: "13",
      question: "A company runs a batch job on an Amazon EC2 instance and it takes 6 hours to complete. The workload is expected to double in volume each month with a proportional increase in processing time. What is the most efficient cloud architecture to address the growing workload?",
      options: ["Run the application on a bare metal Amazon EC2 instance.", "Run the batch job on a larger Amazon EC2 instance type with more CPU.","Run the batch workload in parallel across multiple Amazon EC2 instances.","Change the Amazon EC2 volume type to a Provisioned IOPS SSD volume."],
      correct: "Run the batch workload in parallel across multiple Amazon EC2 instances.", 
    },
    {
      id: "14",
      question: "An individual IAM user must be granted access to an Amazon S3 bucket using a bucket policy. Which element in the S3 bucket policy should be updated to define the user account for which access will be granted?",
      options: ["Condition", "Resource","Principal","Action"],
      correct: "Condition",
    },
    {
      id: "15",
      question: "A Cloud Practitioner needs a tool that can assist with viewing and managing AWS costs and usage over time. Which tool should the Cloud Practitioner use?",
      options: ["AWS Budgets", "AWS Organizations","AWS Cost Explorer","Amazon Inspector"],
      correct: "AWS Cost Explorer",
    },
    {
      id: "16",
      question: "A company plans to deploy a relational database on AWS. The IT department will perform database administration. Which service should the company use?",
      options: ["Amazon DynamoDB", "Amazon ElastiCache","Amazon EC2","Amazon RedShift"],
      correct: "Amazon EC2",
    },
    {
      id: "17",
      question: "A company is planning to move a number of legacy applications to the AWS Cloud. The solution must be cost-effective. Which approach should the company take?",
      options: ["Use an Amazon S3 static website to host the legacy application code.", "Use AWS Lambda to host the legacy applications in the cloud.","Rehost the applications on Amazon EC2 instances that are right-sized.","Migrate the applications to dedicated hosts on Amazon EC2."],
      correct: "Rehost the applications on Amazon EC2 instances that are right-sized.",
       
    },
    {
      id: "18",
      question: "A company must provide access to AWS resources for their employees. Which security practices should they follow? (Select TWO.)",
      options: [" Create IAM policies based on least privilege principles. & Enable multi-factor authentication for users.", "Create IAM users in different AWS Regions. & Create IAM policies based on least privilege principles.","Disable password policies and management console access. & Create IAM Roles and apply them to IAM groups.","Enable multi-factor authentication for users. & Create IAM policies based on least privilege principles."],
      correct: "Enable multi-factor authentication for users. & Create IAM policies based on least privilege principles.",
     
    },
    {
      id: "19",
      question: "An Amazon Virtual Private Cloud (VPC) can include multiple:",
      options: ["Edge locations.", "Internet gateways.","Availability Zones.","AWS Regions."],
      correct: "Availability Zones.", 
    },
    {
      id: "20",
      question: "An application uses a PostgreSQL database running on a single Amazon EC2 instance. A Cloud Practitioner has been asked to increase the availability of the database so there is automatic recovery in the case of a failure. Which tasks can the Cloud Practitioner take to meet this requirement?",
      options: ["Set the DeleteOnTermination value to false for the EBS root volume.", "Configure EC2 Auto Recovery to move the instance to another Region.","Configure an Elastic Load Balancer in front of the EC2 instance.","Migrate the database to Amazon RDS and enable the Multi-AZ feature."],
      correct: "Migrate the database to Amazon RDS and enable the Multi-AZ feature.",
    },
    {
      id: "21",
      question: "A Cloud Practitioner anticipates an increase in application traffic at a future date and time when a sales event will take place. How can the Cloud Practitioner configure Amazon EC2 Auto Scaling to ensure the right number of Amazon EC2 instances are available ahead of the event?",
      options: ["Configure a step scaling policy.", "Configure a scheduled scaling policy.","onfigure a target tracking scaling policy.","Configure predictive scaling"],
      correct: "Configure a scheduled scaling policy.",
    
    },
    {
      id: "22",
      question: "A company is deploying an application on Amazon EC2 that requires low-latency access to application components in an on-premises data center. Which AWS service or resource can the company use to extend their existing VPC to the on-premises data center?",
      options: ["Amazon Workspaces", "AWS Direct Connect","Amazon Connect","AWS Outposts"],
      correct: "AWS Outposts",
     
    },
    {
      id: "23",
      question: "Which type of credential should a Cloud Practitioner use for programmatic access to AWS resources from the AWS CLI/API?",
      options: ["User name and password", "Access keys","SSL/TLS certificate","SSH public keys"],
      correct: "Access keys",
      
    },
    {
      id: "24",
      question: "A company is designing a new a service that must align with the operational excellence pillar of the AWS Well-Architected Framework. Which design principles should the company follow? (Select TWO.)",
      options: ["Anticipate failure. & Perform operations as code.", "Create static operational procedur & Perform operations as code.","Perform manual operations. & Create static operational procedur","Anticipate failure. & Perform manual operations."],
      correct: "Anticipate failure. & Perform operations as code.",
    
    },
    {
      id: "25",
      question: "A website has a global customer base and users have reported poor performance when connecting to the site. Which AWS service will improve the customer experience by reducing latency?",
      options: ["AWS Direct Connect", "Amazon ElastiCache","Amazon CloudFront","Amazon EC2 Auto Scaling"],
      correct: "Amazon CloudFront",
     
    },
    {
      id: "26",
      question: "What is one method of protecting against distributed denial of service (DDoS) attacks in the AWS Cloud?",
      options: ["Configure a firewall in front of resources.", " Monitor the Service Health Dashboard."," Enable AWS CloudTrail logging","Use Amazon CloudWatch monitoring."],
      correct: "Configure a firewall in front of resources.",
    },
    {
      id: "27",
      question: "How much data can a company store in the Amazon S3 service?",
      options: [" 100 TB", "100 PB","Virtually unlimited","1 PB"],
      correct: "Virtually unlimited",
    },
    {
      id: "28",
      question: "A company is deploying a new workload and software licensing requirements dictate that the workload must be run on a specific, physical server. Which Amazon EC2 instance deployment op",
      options: ["Spot Instances", "Dedicated Hosts","Reserved Instances","Dedicated Instances"],
      correct: "Dedicated Hosts",
    },
    {
      id: "29",
      question: "Which of the following are valid benefits of using the AWS Cloud? (Select TWO.)",
      options: ["Total control over data center infrastructure. & Outsource all application development to AWS.", "Total control over data center infrastructure. & Fast provisioning of IT resources","Outsource all operational risk. & Ability to go global quickly.","Fast provisioning of IT resources. & Ability to go global quickly."],
      correct: "Fast provisioning of IT resources. & Ability to go global quickly.",
     
    },
    {
      id: "30",
      question: "Which tasks require the use of the AWS account root user? (Select TWO.)",
      options: ["Enabling encryption for S3.", "Changing AWS Support plans. & Changing payment currency.","Changing the account name. & Changing AWS Support plans.","Viewing AWS CloudTrail logs. &  Changing the account name."],
      correct: "Changing the account name. & Changing AWS Support plans.",
    },
    {
      id: "31",
      question: "Which AWS service can a company use to discover and protect sensitive data that is stored in Amazon S3 buckets.",
      options: ["Amazon Detective", " AWS Policy Generator","Amazon Macie","Amazon GuardDuty"],
      correct: "Amazon Macie",
     
    },
    
    {
      id: "32",
      question: "Which benefits can a company gain by deploying a relational database on Amazon RDS instead of Amazon EC2? (Select TWO.)",
      options: ["Schema management & Automated backups", "Indexing of tables & Root access to OS","Software patching & Indexing of tables","Automated backups & Software patching"],
      correct: "Automated backups & Software patching",
    },
    {
      id: "33",
      question: "A company is planning to deploy an application with a relational database on AWS. The application layer requires access to the database instance’s operating system in order to run scripts. The company prefer to keep management overhead to a minimum. Which deployment should be used for the database?",
      options: ["Amazon S3", "Amazon EC2","Amazon DynamoDB","Amazon RDS"],
      correct: "Amazon EC2",
    },
    {
      id: "34",
      question: "Customers using AWS services must patch operating systems on which of the following services?",
      options: ["Amazon DynamoDB", "Amazon EC2","AWS Fargate","AWS Lambda"],
      correct: "Amazon EC2",
    },
    {
      id: "35",
      question: "Which AWS feature can be used to launch a pre-configured Amazon Elastic Compute Cloud (EC2) instance?",
      options: ["Amazon AppStream 2.0", "Amazon EC2 Systems Manager","Amazon Machine Image (AMI)","Amazon Elastic Block Store (EBS)"],
      correct: "Amazon Machine Image (AMI)",
     
    },
    {
      id: "36",
      question: "Which of the following AWS features or services can be used to provide root storage volumes for Amazon EC2 instances?",
      options: ["Amazon Simple Storage Service (S3)", "Amazon Elastic File System (EFS)"," Amazon Machine Image","Amazon Elastic Block Store (EBS)"],
      correct: "Amazon Elastic Block Store (EBS)", 
    },
    {
      id: "37",
      question: "Which AWS service or feature can assist with protecting a website that is hosted outside of AWS?",
      options: ["AWS Web Application Firewall (WAF)", "Amazon VPC route tables","Amazon VPC network ACLs","Amazon EC2 security groups"],
      correct: "AWS Web Application Firewall (WAF)",
    },
    {
      id: "38",
      question: "Which AWS service can a team use to deploy infrastructure on AWS using familiar programming languages?",
      options: ["AWS CodeCommit", "AWS Config","Amazon CodeGuru","AWS Cloud Development Kit (AWS CDK)"],
      correct: "AWS Cloud Development Kit (AWS CDK)",
    },
    {
      id: "39",
      question: "When running applications in the AWS Cloud, which common tasks can AWS manage on behalf of their customers? (Select TWO.)",
      options: ["Creating a database schema & Taking a backup of a database", "Taking a backup of a database & Application source code auditing","Patching database software & Taking a backup of a database","Application security testing & Patching database software"],
      correct: "Patching database software & Taking a backup of a database",
     
    },
    {
      id: "40",
      question: "Which of the following will help a user determine if they need to request an Amazon EC2 service limit increase?",
      options: ["AWS Service Health Dashboard", "AWS Trusted Advisor","AWS Personal Health Dashboard"," AWS Cost Explorer"],
      correct: "AWS Trusted Advisor",
     
    },
    {
      id: "41",
      question: "How does the AWS cloud increase the speed and agility of execution for customers? (Select TWO.)",
      options: ["Secured data centers & Fast provisioning of resources", "Secured data centers & Lower cost of deployment","Fast provisioning of resources & Private connections to data centers"," Scalable compute capacity & Fast provisioning of resources"],
      correct: "Scalable compute capacity & Fast provisioning of resources",
    
    },
    {
      id: "42",
      question: "A company has multiple AWS accounts and is using AWS Organizations with consolidated billing. Which advantages will they benefit from? (Select TWO.)",
      options: ["They will receive a fixed discount for all usage across accounts. & They will be automatically enrolled in a business support plan", "The default service limits in all accounts will be increased. & They will receive one bill for the accounts in the Organization.","They will be automatically enrolled in a business support plan & They will be automatically enrolled in a business support plan","They will receive one bill for the accounts in the Organization. & They will be automatically enrolled in a business support plan"],
      correct: "They will receive one bill for the accounts in the Organization. & They will be automatically enrolled in a business support plan",
    },
    {
      id: "43",
      question: "Which of the following represents a value proposition for using the AWS Cloud?",
      options: [" AWS provides full access to their data centers.", "Customers can request specialized hardware.","It is not necessary to enter into long term contracts.","AWS is responsible for securing your applications."],
      correct: "It is not necessary to enter into long term contracts.",
    },
    {
      id: "44",
      question: "A company has many underutilized compute resources on-premises. Which AWS Cloud feature will help resolve this issue?",
      options: ["High availability", "Fault tolerance","Global deployment","Elasticity"],
      correct: "Elasticity",
    },
    {
      id: "45",
      question: "What can a Cloud Practitioner use to categorize and track AWS costs by project?",
      options: ["Cost Allocation Tags", "Multiple accounts","Consolidated billing","AWS Trusted Advisor"],
      correct: "Cost Allocation Tags",
    },
   
    {
      id: "46",
      question: "A company is deploying a MySQL database on AWS. The database must easily scale and have automatic backup enabled. Which AWS service should the company?",
      options: ["Amazon DocumentDB", "Amazon Aurora","Amazon Athena","Amazon DynamoDB"],
      correct: "Amazon Aurora",
    },
   
    {
      id: "47",
      question: "A company plans to use reserved instances to get discounted pricing for Amazon EC2 instances. The company may need to change the EC2 instance type during the one year period. Which instance purchasing option is the MOST cost-effective for this use case?",
      options: ["Regional Reserved Instances", " Zonal Reserved Instances","Convertible Reserved Instances","Standard Reserved Instances"],
      correct: "Convertible Reserved Instances",
    
    },
    {
      id: "48",
      question: "Which of the following is a sole responsibility of AWS?",
      options: ["Patch management", "Customer data access controls","Availability Zone management","Application deployment"],
      correct: "Availability Zone management", 
    },
    {
      id: "49",
      question: "Which AWS service provides a managed software version control system?",
      options: ["AWS CodeCommit", "AWS DataSync","AWS CodePipeline","Amazon CodeDeploy"],
      correct: "AWS CodeCommit", 
    },
    {
      id: "50",
      question: "Which of the following deployments involves the reliability pillar of the AWS Well-Architected Framework?",
      options: ["Use CloudFormation to deploy infrastructure", "Attach a WebACL to a CloudFront distribution","Amazon EBS provisioned IOPS volume","Amazon RDS Multi-AZ deployment"],
      correct: "Amazon RDS Multi-AZ deployment",
    },
    {
      id: "51",
      question: "A Cloud Practitioner needs to monitor a new Amazon EC2 instances CPU and network utilization. Which AWS service should be used?",
      options: ["Amazon CloudWatch", "AWS Systems Manager","AWS CloudTrail","Amazon Inspector"],
      correct: "Amazon CloudWatch",
    },
    {
      id: "52",
      question: "AWS are able to continually reduce their pricing due to:",
      options: ["Economies of scale.", "Compute savings plans.","Elastic compute services.","Pay-as-you go pricing."],
      correct: "Economies of scale.",
    },
    {
      id: "53",
      question: "Which AWS services can a company use to gather information about activity in their AWS account? (Select TWO.)",
      options: [" Amazon Connect & AWS CloudTrail", "Amazon CloudWatch & AWS CloudTrail","Amazon CloudFront &","AWS CloudTrail & AWS Trusted Advisor"],
      correct: "Amazon CloudWatch & AWS CloudTrail",
    },
    {
      id: "54",
      question: "A company is deploying an application in the AWS Cloud. How can they secure the application? (Select TWO.)",
      options: ["Enable encryption for the application data at rest. & Provide full admin access to developer and operations staff.", " Enable monitoring by turning off encryption for data in transit. & Limit access privileges according to the principal of least privilege.","Configure public access for the AWS services used by the application. &  Enable monitoring by turning off encryption for data in transit.","Enable encryption for the application data at rest. & Limit access privileges according to the principal of least privilege."],
      correct: "Enable encryption for the application data at rest. & Limit access privileges according to the principal of least privilege.",
    },
    {
      id: "55",
      question: "A Cloud Practitioner is developing a new application and wishes to integrate features of AWS services directly into the application. Which of the following is the BEST tool for this purpose?",
      options: ["AWS CodePipeline", "AWS Command Line Interface (CLI)","AWS CodeDeploy","AWS Software Development Kit"],
      correct: "AWS Software Development Kit",
    },
    {
      id: "56",
      question: "A user needs to identify underutilized Amazon EC2 instances to reduce costs. Which AWS service or feature will meet this requirement?",
      options: ["AWS Personal Health Dashboard", "AWS Trusted Advisor","AWS Cost Explorer","AWS CodeBuild"],
      correct: "AWS Trusted Advisor",
    },
    {
      id: "57",
      question: "Which of the following can an AWS customer use to launch a new ElastiCache cluster? (Select TWO.)",
      options: ["AWS Concierge & AWS Management Console", "AWS CloudFormation & AWS Data Pipeline","AWS Systems Manager & AWS Management Console","AWS CloudFormation & AWS Management Console"],
      correct: "AWS CloudFormation & AWS Management Console",
    },
    {
      id: "58",
      question: "A company is deploying a new web application in a single AWS Region that will be used by users globally. Which AWS services will assist with lowering latency and improving transfer speeds for the global users? (Select TWO.)",
      options: ["AWS Direct Connect & AWS Transfer Gateway", "AWS Snowcone & Amazon CloudFront","AWS Global Accelerator & AWS Direct Connect","AWS Global Accelerator & Amazon CloudFront"],
      correct: "AWS Global Accelerator & Amazon CloudFront",
    },
    {
      id: "59",
      question: "For what purpose would a Cloud Practitioner access AWS Artifact?",
      options: ["Create a security assessment report for AWS services.", "Access training materials for AWS services.","Gain access to AWS security and compliance documents.","Download configuration details for all AWS resources."],
      correct: "Gain access to AWS security and compliance documents.",
    },
    {
      id: "60",
      question: "A company is migrating a monolithic application that does not scale well into the cloud and refactoring it into a microservices architecture. Which best practice of the AWS Well-Architected Framework does this plan relate to?",
      options: ["Use multiple solutions to improve performance", "Manage change in automation.","Stop spending money on undifferentiated heavy lifting.","Implement loosely coupled services."],
      correct: "Implement loosely coupled services.",
    },
    {
      id: "61",
      question: "Which AWS Cloud service provides recommendations on how to optimize performance for AWS services?",
      options: ["AWS CloudTrail", "Amazon CloudWatch","AWS Trusted Advisor","Amazon Inspector"],
      correct: "AWS Trusted Advisor"
    },
    {
      id: "62",
      question: "What are AWS Identity and Access Management (IAM) access keys used for?",
      options: ["Logging in to the AWS Management Console. ", "Ensuring the integrity of log files.","Making programmatic calls to AWS from AWS APIs.","Enabling encryption in transit for web servers."],
      correct: "Making programmatic calls to AWS from AWS APIs.",
       
    },
    {
      id: "63",
      question: "What is the best practice for managing AWS IAM access keys?",
      options: [" Never use access keys, always use IAM roles.", "AWS rotate access keys on a schedule.","There is no need to manage access keys.","Customers should rotate access keys regularly."],
      correct: "Customers should rotate access keys regularly.", 

     
    },
    {
      id: "64",
      question: "According to the AWS shared responsibility model, which of the following is a responsibility of AWS?",
      options: ["Updating security group rules to enable connectivity", "Patching software running on Amazon EC2 instances.","Configuring network ACLs to block malicious attacks.","Updating the firmware on the underlying EC2 hosts."],
      correct: "Updating the firmware on the underlying EC2 hosts.", 
    },
    {
      id: "65",
      question: "A large company is interested in avoiding long-term contracts and moving from fixed costs to variable costs. What is the value proposition of AWS for this company?",
      options: ["Automated cost optimization", "Volume pricing discounts", "Economies of scale", "Pay-as-you-go pricing"],
      correct: "Pay-as-you-go pricing",
    },
  ];
  


 
