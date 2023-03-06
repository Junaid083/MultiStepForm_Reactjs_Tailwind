import React from "react";
import { InputWrapper } from "../Inputs/InputWrapper";
import { Label } from "../Inputs/Label";
import { Input } from "../Inputs/Input";
import { useForm, FormProvider } from "react-hook-form";

const Camera = () => {
 

 
  return (
    <>
     
     
        <FormProvider>
          <form  className="space-y-6">
            <div className="space-y-6 ">
              <div className="grid grid-cols-2  gap-y-6 gap-x-6 sm:grid-cols-12">
                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Display Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    rules={{required: "Name is required"}}
                  />
                 
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="camerabrand">Camera Brand</Label>
                  <Input
                    id="camerabrand"
                    name="camerabrand"
                    type="text"
                    rules={{required: "Please enter a valid camerabrand"}}
                  />
                  
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Device ID</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                   
                  />
                 
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Camera Model</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                   
                  />
                 
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Camera ID</Label>
                  <Input
                    id="deviceName"
                    name="deviceName"
                    type="text"
                  
                  />
                  
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="number">Camera Protocol</Label>
                  <Input
                    id="pattern"
                    name="pattern"
                    type="text"
                  
                  />
                  
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="textarea">Pre Processing Options</Label>
                  <Input
                    id="textarea"
                    name="textarea"
                    type="text"
                  />
                 
                </InputWrapper>
              </div>
            </div>

            
          </form>
        </FormProvider>
     
    </>
  );
};
export default Camera;
