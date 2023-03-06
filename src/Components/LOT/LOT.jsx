import React from "react";
import { InputWrapper } from "../Inputs/InputWrapper";
import { Label } from "../Inputs/Label";
import { Input } from "../Inputs/Input";
import { useForm, FormProvider } from "react-hook-form";

const index = () => {
  return (
    <>
      <FormProvider>
        <form className="space-y-6">
          <div className="space-y-6 ">
            <div className="grid grid-cols-2  gap-y-6 gap-x-6 sm:grid-cols-12">
              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="name">Site</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  rules={{ required: "Name is required" }}
                />
              </InputWrapper>

          
              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="name">Device Name</Label>
                <Input id="deviceName" name="deviceName" type="text" />
              </InputWrapper>

              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="number">Number of Validation Samples</Label>
                <Input id="pattern" name="pattern" type="text" />
              </InputWrapper>

              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="textarea">Device IP Address</Label>
                <Input id="textarea" name="textarea" type="text" />
              </InputWrapper>

              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="textarea">Folder Location to Store Images</Label>
                <Input id="textarea" name="textarea" type="text" />
              </InputWrapper>

              <InputWrapper outerClassName="sm:col-span-4">
                <Label id="textarea">Unit Of Measure</Label>
                <Input id="textarea" name="textarea" type="text" />
              </InputWrapper>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default index;
