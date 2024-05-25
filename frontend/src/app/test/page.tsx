"use client";

import printJS from "print-js";
import { QRCodeSVG } from "qrcode.react";
import LabelAndText from "./components/LableAndText";

const PrintTesting = () => {
  return (
    <div>
      <div
        id="printJS-form"
        className="w-full flex flex-col items-center mt-20"
      >
        <form action="$" className="w-1/4">
          <h5 className="font-bold text-center mb-2">CTF</h5>
          <div className="flex flex-row justify-between">
            <QRCodeSVG
              value="https://reactjs.org/"
              width={160}
              height={148}
              className="mt-2"
            />
            <div className="space-y-2">
              <LabelAndText label="CTF No:" text="363828AA" />
              <LabelAndText label="Created By" text="Kyaw Thiha" />
              <LabelAndText label="Created at:" text="2024-01-23(02:40:28)" />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-10 ml-1">
            <div className="space-y-5">
              <LabelAndText label="From:" text="YGN / YGN - Sorting" />
              <LabelAndText label="Package (Qty):" text="3" />
            </div>
            <div className="space-y-5">
              <LabelAndText label="To:" text="BLN / -" />
              <LabelAndText label="Total Waybills:" text="93" />
            </div>
          </div>
          <div className="mt-6 ml-1">
            <label className="text-sm text-zinc-500">Package Lists:</label>
            <div className="mt-3 space-y-3">
              <h5>PG94028 (44) (Peanut Butter Bag(ပီနံအိတ်))</h5>
              <h5>PG94028 (45) (Peanut Butter Bag(ပီနံအိတ်))</h5>
              <h5>PG94028 (4) (Parcel(ပါဆယ်ထုတ်))</h5>
            </div>
          </div>
        </form>
      </div>
      <button
        type="button"
        onClick={() => {
          printJS({
            printable: "printJS-form",
            type: "html",
            targetStyles: ["*"],
          });
        }}
      >
        Print Form
      </button>
    </div>
  );
};

export default PrintTesting;
