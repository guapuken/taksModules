import React from "react";
import ProgressBar from "./progressBar";


describe("ProgressBar",()=>{
  test("render the ProgressBar component",()=>{
    expect(
      <ProgressBar
      valor={0}
      status='onTime'
      width={350}
      />
    )
  })
})
