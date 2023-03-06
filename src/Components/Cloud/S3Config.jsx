
import React from "react";
import { InputWrapper } from "../Inputs/InputWrapper";
import { Label } from "../Inputs/Label";
import { Input } from "../Inputs/Input";
import { useForm, FormProvider } from "react-hook-form";

const S3Config = () => {
 
  
  return (
   

    <FormProvider>
      <form  className="space-y-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-9">
            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="first-name">AWS Region</Label>
              <Input
                id="first-name"
                name="firstName"
                type="text"
                rules={{required: "First name is required"}}
              />
             
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="last-name">S3 Folder Name</Label>
              <Input
                id="last-name"
                name="lastName"
                type="text"
                rules={{required: "Last name is required"}}
              />
             
            </InputWrapper>

            {/* <br className="sm:col-span-12" /> */}

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="email">S3 Bucket Name</Label>
              <Input
                id="email"
                name="email"
                type="text"
                rules={{required: "Please enter a valid email"}}
              />
             
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="company">Image Data Transfer in Seconds</Label>
              <Input
                id="company"
                name="company"
                type="text"
                rules={{required: "Company is required"}}
              />
             
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="company">S3 AWS Key</Label>
              <Input
                id="company"
                name="company"
                type="text"
                rules={{required: "Company is required"}}
              />
             
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="company">S3 AWS Key ID</Label>
              <Input
                id="company"
                name="company"
                type="text"
                rules={{required: "Company is required"}}
              />
             
            </InputWrapper>
          </div>
        </div>


      </form>
    </FormProvider>
  );
};
export default S3Config;
