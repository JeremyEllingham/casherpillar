import Image from "next/image";

export default function Home() {

  const podcastFlipstarters = [
    {
      id: 1,
      name: "Episodes 76 - 85",
      number: 1,
      status: "DELIVERED",
      launchDate: "13th April 2023",
      fundDate: "13th April 2023",
      deliveryDate: "18th July 2023",
      askBCH: "20",
      bchUsdPrice: "125",
      askUSD: "2 500"
    },
    {
      id: 2,
      name: "Episodes 86 - 95",
      number: 2,
      status: "DELIVERED",
      launchDate: "30th July 2023",
      fundDate: "1st August 2023",
      deliveryDate: "24th October 2023",
      askBCH: "12",
      bchUsdPrice: "250",
      askUSD: "3 000"
    },
    {
      id: 3,
      name: "Episodes 96 - 105",
      number: 3,
      status: "DELIVERED",
      launchDate: "November 3rd 2023",
      fundDate: "November 30th 2023",
      deliveryDate: "January 26th 2024",
      askBCH: "35",
      bchUsdPrice: "250",
      askUSD: "8 750"
    },
    {
      id: 4,
      name: "Episodes 106 - 115",
      number: 4,
      status: "REQUESTING",
      launchDate: "6th February 2024",
      fundDate: "TBD",
      deliveryDate: "TBD",
      askBCH: "25",
      bchUsdPrice: "240",
      askUSD: "6 000"
    }
  ].reverse()

  const requestingFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "REQUESTING").length.toString()

  const inProgressFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "IN_PROGRESS").length.toString()

  const deliveredFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "DELIVERED").length.toString()

  const failedFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "FAILED").length.toString()

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/butterfly.png"
          width={100}
          height={100}
          alt="Emerald butterfly logo"
        />
        <p className="text-3xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          CasherPillar
        </p>
        <p className="w-full">Grow the BCH Butterfly</p>
      </div>

      <div className="flex w-full border-solid border-2 border-slate-300">
        <div>
          <p className="text-xl flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-red-800/30">
            The Bitcoin Cash Podcast
          </p>
          <p className="text-xl flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-red-800/30">
            ...more projects soon
          </p>
        </div>
        <div className="p-5">
          <p className="text-lg">
            The Bitcoin Cash Podcast
          </p>
          <p>
            By: Jeremy
          </p>
          <p className="pt-1 italic">Following Bitcoin Cash on its rise to global reserve currency. Promotion of Bitcoin Cash through regular 2 hour podcasts, music videos & informational website.</p>

          <div>
            <div className="mt-2 mb-2">
              <hr />
            </div>

            <div className="justify-between">
              <span className="px-1">
                <a className="underline" href="https://bitcoincashpodcast.com" target="_blank" >bitcoincashpodcast.com</a>
              </span>
              <span className="px-1">
                <a className="underline" href="https://twitter.com/TheBCHPodcast" target="_blank" >Twitter</a>
              </span>
            </div>

            <div className="mt-2 mb-2">
              <hr />
            </div>
          </div>

          <p className="text-lg">FUNDING</p>
          <p className="italic pb-2">$ values are USD unless otherwise specified.</p>

          <p>All Time Funding:</p>
          <div>
            <span className="pr-2">{podcastFlipstarters.length.toString()}x Flipstarters</span>

            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1">
              Requesting Funding ({requestingFlipstarterCount})
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
              In Progress ({inProgressFlipstarterCount})
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">
              Delivered ({deliveredFlipstarterCount})
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
              Failed ({failedFlipstarterCount})
            </span>
          </div>
          <p>13th April 2023 - January 26th 2024</p>
          <p>67 BCH (USD $14 250) - excluding current requests</p>

          <div className="py-2">
            <p>Last Funded - November 30th 2023</p>
            <p>Next Fundraising Expected - Currently In Progress</p>
          </div>

          {podcastFlipstarters.map(({ id, name, number, status, launchDate, fundDate, deliveryDate, askBCH, bchUsdPrice, askUSD }) => (
            <div key={id} className={"py-2"}>
              <p className={"text-lg"}>#{number}: {name}</p>
              <p>{status}</p>
              <p>Ask: {askBCH} BCH @ ${bchUsdPrice} / BCH (${askUSD})</p>
              <p>Launched: {launchDate}</p>
              <p>Funded: {fundDate}</p>
              <p>Delivered: {deliveryDate}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
