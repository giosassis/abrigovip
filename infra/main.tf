provider "aws" {
  version = "~> 4.0"
  region = "us-east-1"
}

resource "aws_instance" "firstInfra" {
  ami = "ami-0149b2da6ceec4bb0"
  instance_type = "t2.micro"
  key_name = "terraform-aws"
}