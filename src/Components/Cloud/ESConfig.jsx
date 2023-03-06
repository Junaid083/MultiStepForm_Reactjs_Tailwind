
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
              <Label id="first-name">ES AWS Key</Label>
              <Input
                id="first-name"
                name="firstName"
                type="text"
                rules={{required: "First name is required"}}
              />
             
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="last-name">ES AWS Key ID</Label>
              <Input
                id="last-name"
                name="lastName"
                type="text"
                rules={{required: "Last name is required"}}
              />
             
            </InputWrapper>


            <InputWrapper outerClassName="sm:col-span-4">
              <Label id="email">ES End Point</Label>
              <Input
                id="email"
                name="email"
                type="text"
                rules={{required: "Please enter a valid email"}}
              />
             
            </InputWrapper>
          </div>
        </div>


      </form>
    </FormProvider>
  );
};
export default S3Config;
