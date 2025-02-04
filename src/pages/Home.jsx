import React, { useState, useEffect } from 'react';
import Preloader from '../components/layout/Preloader';
import { ButtonSolid } from '../components/common/base/buttons/Button';
import PartnerSection from '../components/layout/Partner';

// Images
import PairsLogo from '/images/pairsLogo.svg';
import Pairs from '/images/pairs.svg';
import DeskCard from '/images/card.png';
import MobileCard from '/images/swap-card-mobile.png';
import InfoCard1 from '/images/info-card1.png';
import InfoCard2 from '/images/info-card-2.png';
import PairApp from '/images/pairs-app.png';
import PairAppMobile from '/images/pairs-app-mobile.png';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // Show preloader for 7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-[#1A1A1A] h-screen">
          <nav className="bg-[#1A1A1A] flex justify-between items-center px-3 lg:px-10 pt-5 pb-4">
            <div className="flex gap-2">
              <img src={PairsLogo} alt="Logo" />
              <img src={Pairs} alt="Name" />
            </div>
            <ButtonSolid text="Connect Wallet" />
          </nav>
          <div
            className="wave-background pt-16 lg:pt-60 flex justify-between flex-col lg:flex-row pb-10"
            style={{
              backgroundImage: "url('/images/background1.gif')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className=" pl-0 lg:pl-11">
              <h3 className="text-[#00a848] text-[27px] font-medium text-center lg:text-left">
                Pairs
              </h3>
              <h2 className="text-gray-300 text-[55px] font-normal pb-6 text-center lg:text-left">
                Swap <span className="font-semibold">Seamlessly</span> Anywhere
                with Pairs
              </h2>
              <p className="text-gray-300 text-[18px] font-normal pb-6 text-center lg:text-left">
                Powering your CeFi and DeFi transactions
              </p>
              <div className="flex justify-center lg:justify-start">
                <ButtonSolid
                  text="Connect Wallet"
                  className="!bg-gray-300 !text-black"
                />
              </div>
            </div>
            <div className="mt-10 hidden lg:block">
              <img src={DeskCard} alt="" className="w-[40rem] h-[28rem]" />
            </div>
            <div className="mt-10 block lg:hidden">
              <img src={MobileCard} alt="" className="w-full px-6" />
            </div>
          </div>
          <div>
            <PartnerSection />
          </div>
          <div className="bg-[#1A1A1A] flex flex-col lg:flex-row justify-between lg:px-24 py-24 gap-10 lg:gap-0">
            <div className="text-gray-300">
              <h2 className="text-[35px] sm:text-[36px] md:text-[40px] lg:text-[45px] font-normal max-w-full lg:max-w-[500px] text-center lg:text-left">
                Welcome to{' '}
                <span className="font-semibold text-[#7ee89f]">swaps</span> with
                minimal fees.
              </h2>

              <p className="px-[100px] lg:px-0 lg:max-w-[500px] text-center lg:text-left pt-6">
                Pairs is launching with a core feature, offering an accessible
                and efficient DeFi trading solution
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <img src={InfoCard1} alt="" className="w-72 h-[350px]" />
              <img src={InfoCard2} alt="" className="w-72 h-[350px]" />
            </div>
          </div>

          <div className="bg-[#1A1A1A] flex flex-col lg:flex-row justify-between py-24 gap-10 lg:gap-16">
            <div className="">
              <h1 className="text-gray-300 text-[35px] lg:text-[48px] font-semibold lg:max-w-[900px] text-center lg:text-left pl-0 lg:pl-24">
                Expect rapid developments in our services and features that
                enhance your DeFi experience without any fluff. We’re here to
                make DeFi accessible and efficient.
              </h1>
              <div className="flex justify-center lg:justify-start lg:pl-24">
                <ButtonSolid
                  text="Connect Wallet"
                  className="!bg-gray-300 !text-black !mt-12"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={PairApp} alt="" />
            </div>
            <div className="lg:hidden flex justify-center">
              <img src={PairAppMobile} alt="" className="w-96 px-6" />
            </div>
          </div>

          <div className="py-16 bg-[#f6f9f4]">
            <div className="flex flex-col lg:flex-row justify-between py-5 lg:py-14 px-24 gap-5 lg:gap-0">
              <h2 className="text-center lg:text-left text-[32px] font-semibold">
                Why Pairs?
              </h2>
              <div className="relative border border-gray-500 rounded-lg px-5 pl-8 py-3">
                <img
                  src="/icons/swap-icon.svg"
                  alt=""
                  className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <h3 className="text-[15px] lg:text-[20px] font-semibold">
                  Efficient Swaps:
                </h3>
                <p className="text-gray-500 text-[14px] font-normal lg:text-[18px]">
                  Executive swaps across blockchains efficiently.
                </p>
              </div>
              <div className="relative border border-gray-500 rounded-lg px-5 pl-8 py-3">
                <img
                  src="/icons/dollar-icon.svg"
                  alt=""
                  className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <h3 className="text-[15px] lg:text-[20px] font-semibold">
                  Cost-Effective:
                </h3>
                <p className="text-gray-500 text-[14px] font-normal lg:text-[18px]">
                  Reduce your trading costs with our optimized platform.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between px-24 gap-5 lg:gap-0">
              <div className="relative border border-gray-500 rounded-lg px-5 pl-8 py-3">
                <img
                  src="/icons/speed-icon.svg"
                  alt=""
                  className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <h3 className="text-[15px] lg:text-[20px] font-semibold">
                  Speed:
                </h3>
                <p className="text-gray-500 text-[14px] font-normal lg:text-[18px]">
                  Fast transaction keep your trading up to speed.
                </p>
              </div>
              <div className="relative border border-gray-500 rounded-lg px-5 pl-8 py-3">
                <img
                  src="/icons/looking-icon.svg"
                  alt=""
                  className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <h3 className="text-[15px] lg:text-[20px] font-semibold">
                  Looking Ahead:
                </h3>
                <p className="text-gray-500 text-[14px] font-normal lg:text-[18px]">
                  Anticipate more features like LP Staking and Governance to
                  further enrich trading.
                </p>
              </div>
            </div>
          </div>
          <footer className="">
            <h1 className="text-[30px] lg:text-[55px] font-semibold text-center text-gray-400 px-40 pt-8">
              <span className="text-white">Learn</span> more about the Pairs
              vision and features in our upcoming Whitepaper
            </h1>
            <div className="flex justify-center z-20 border-b border-slate-500 pb-24">
              <ButtonSolid
                text="Connect Wallet"
                className="!bg-[#7ee89f] hover:!bg-[#00a848] !text-black !mt-12 z-20"
              />
            </div>
            <div className="flex flex-col sm:text-7xl lg:flex-row justify-center pt-8 gap-4 text-center lg:gap-12">
              <p className="text-[15px] text-white font-medium z-20 hover:text-[#00a848] cursor-pointer">
                © {currentYear} PAIRS
              </p>
              <p className="text-[15px] text-white font-medium z-20 hover:text-[#00a848] cursor-pointer">
                Terms & Conditions
              </p>
              <p className="text-[15px] text-white font-medium z-20 hover:text-[#00a848] cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-[15px] text-white font-medium z-20 hover:text-[#00a848] cursor-pointer">
                Risk Warning
              </p>
              <p className="text-[15px] text-white font-medium z-20 hover:text-[#00a848] cursor-pointer">
                Debit Card T&C
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;
