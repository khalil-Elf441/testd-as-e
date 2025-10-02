export const examsData = {
  aws: {
    name: "Amazon Web Services",
    logo: "/logos/aws.png",
    exams: [
      {
        code: "SAA-C03",
        name: "Solutions Architect Associate",
        duration: 60,
        theme: "AWS Architecture",
        mocks: [
          {
            id: 1,
            title: "Mock Exam 1",
            duration: 50,
            theme: "S3 & EC2",
            questions: [
              {
                id: 1,
                type: "command",
                description: "Create an S3 bucket with versioning enabled",
                solution:
                  "aws s3api create-bucket --bucket my-bucket --versioning-configuration Status=Enabled",
              },
              {
                id: 2,
                type: "multiple-choice",
                description:
                  "Which storage class is cheapest for archival?",
                options: [
                  "STANDARD",
                  "GLACIER",
                  "INTELLIGENT_TIERING",
                  "ONEZONE_IA",
                ],
                solution: "GLACIER",
              },
            ],
          },
          {
            id: 2,
            title: "Mock Exam 2",
            duration: 60,
            theme: "Networking & IAM",
            questions: [
              {
                id: 1,
                type: "command",
                description: "Create an IAM role named 'DevRole'",
                solution: "aws iam create-role --role-name DevRole --assume-role-policy-document file://trust.json",
              },
            ],
          },
        ],
      },
    ],
  },
  gcp: {
    name: "Google Cloud Platform",
    logo: "/logos/gcp.png",
    exams: [
      {
        code: "ACE",
        name: "Associate Cloud Engineer",
        duration: 60,
        theme: "GCP Core Services",
        mocks: [
          {
            id: 1,
            title: "Mock Exam 1",
            duration: 50,
            theme: "Compute Engine & Storage",
            questions: [
              {
                id: 1,
                type: "command",
                description: "Create a GCP VM instance",
                solution: "gcloud compute instances create my-instance --zone=us-central1-a",
              },
            ],
          },
        ],
      },
    ],
  },
};
