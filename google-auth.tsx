import coraIcon from "./cora-icon.png";
import lockIcon from "./lock-icon.svg?url";
import closeIcon from "./close-icon.svg?url";
import googleColorIcon from "./google-color-icon.svg?url";
import arrowDown from "./arrow-down.svg?url";
import personIcon from "./person-icon.svg?url";
import avatarBg from "./avatar-bg.svg?url";

export const GoogleAuth = ({ onAccountClick }: { onAccountClick?: () => void }): JSX.Element => {
  return (
    <div className="bg-white relative rounded-[44px] size-full overflow-hidden">
      {/* Browser sheet */}
      <div className="absolute left-0 top-[54px] w-full bottom-0 bg-white rounded-t-[8px]">
        {/* Address bar */}
        <div className="relative h-[59px] w-full">
          <p className="absolute left-[15px] top-[20px] font-['Inter',sans-serif] font-normal text-[16px] text-[#3278fb] tracking-[-0.64px]">
            Cancel
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 top-[20px] flex items-center gap-[3px]">
            <img alt="" className="h-[13px] w-[9px]" src={lockIcon} />
            <p className="font-['SF_Pro_Display',sans-serif] font-medium text-[17px] text-[#020202] tracking-[0.51px]">
              accounts.google.com
            </p>
          </div>
          <img alt="" className="absolute right-[20px] top-[18px] size-[24px]" src={closeIcon} />
        </div>

        {/* Sign in with Google header + progress */}
        <div className="relative h-[41px] w-full">
          <div className="absolute bg-[#3479f3] h-[4px] left-0 top-0 w-[134px]" />
          <div className="absolute left-0 top-[4px] w-full h-px bg-[#e5e5e5]" />
          <div className="absolute left-[14px] top-[14px] flex items-center gap-[10px]">
            <img alt="" className="size-[20px]" src={googleColorIcon} />
            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#737373] tracking-[-0.56px]">
              Sign in with Google
            </p>
          </div>
          <div className="absolute left-0 bottom-0 w-full h-px bg-[#e5e5e5]" />
        </div>

        {/* Cora icon */}
        <div className="flex justify-center mt-[13px]">
          <img alt="Cora" className="size-[38px] rounded-[8px] object-cover" src={coraIcon} />
        </div>

        {/* Choose an account */}
        <div className="text-center mt-[16px]">
          <p className="font-['Inter',sans-serif] font-normal text-[24px] text-[#1f1f1f] tracking-[-0.48px]">
            Choose an account
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#1f1f1f] tracking-[-0.28px] mt-[4px]">
            to continue to <span className="font-semibold text-[#366fe2]">Cora</span>
          </p>
        </div>

        {/* Account row */}
        <div className="mx-[25px] mt-[52px]">
          <div className="h-px bg-[#e5e5e5] w-full" />
          <div className="flex items-center justify-between py-[8px] cursor-pointer hover:bg-[#f5f5f5] -mx-[10px] px-[10px] rounded-[8px] transition-colors" onClick={onAccountClick}>
            <div className="flex items-center gap-[20px]">
              <div className="relative size-[24px] flex items-center justify-center">
                <img alt="" className="absolute inset-0 size-full" src={avatarBg} />
                <p className="relative font-['SF_Pro_Display',sans-serif] text-[12.8px] text-white tracking-[-0.256px]">
                  O
                </p>
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] text-[#3f3f3f] tracking-[-0.14px]">
                  Ash Ketchum
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#616463] tracking-[-0.12px]">
                  contact@ashketchum.com
                </p>
              </div>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#626465] tracking-[0.12px]">
              Signed out
            </p>
          </div>
          <div className="h-px bg-[#e5e5e5] w-full" />

          {/* Use another account */}
          <div className="flex items-center gap-[25px] py-[8px]">
            <img alt="" className="size-[16px]" src={personIcon} />
            <p className="font-['Inter',sans-serif] font-medium text-[14px] text-[#3d3f3e] tracking-[-0.14px]">
              Use another account
            </p>
          </div>
          <div className="h-px bg-[#e5e5e5] w-full" />
        </div>

        {/* Privacy text */}
        <div className="mx-[25px] mt-[60px] w-[312px]">
          <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[#626465] leading-[1.5] tracking-[-0.13px]">
            To continue, Google share your name email address, language preference, and profile picture with Sapp. Before using this app, you can review Sapp's{" "}
            <span className="font-semibold text-[#366fe2]">privacy policy</span> and{" "}
            <span className="font-semibold text-[#366fe2]">terms of service.</span>
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[40px] left-[25px]">
          <div className="flex items-center gap-[4px]">
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#626465] tracking-[0.12px]">
              English (United states)
            </p>
            <img alt="" className="size-[16px]" src={arrowDown} />
          </div>
          <div className="flex gap-[20px] mt-[16px]">
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#626465]">Help</p>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#626465]">Privacy</p>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#626465]">Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};
