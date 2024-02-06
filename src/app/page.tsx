import Image from "next/image";

export default function Home() {

  const podcastFlipstarters = [
    {
      id: 1,
      name: "Episodes 76 - 85",
      number: 1,
      status: "DELIVERED",
      launched: "",
      funded: "",
      delivered: "",
      askBCH: "",
      askUSD: ""
    },
    {
      id: 2,
      name: "Episodes 86 - 95",
      number: 2,
      status: "DELIVERED",
      launched: "30th July 2023",
      funded: "1st August 2023",
      delivered: "",
      askBCH: "",
      askUSD: ""
    },
    {
      id: 3,
      name: "Episodes 96 - 105",
      number: 3,
      status: "DELIVERED",
      launched: "",
      funded: "",
      delivered: "",
      askBCH: "",
      askUSD: ""
    },
    {
      id: 4,
      name: "Episodes 106 - 115",
      number: 4,
      status: "REQUESTING",
      launched: "",
      funded: "",
      delivered: "",
      askBCH: "",
      askUSD: ""
    }
  ]

  const requestingFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "REQUESTING").length.toString()

  const inProgressFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "IN_PROGRESS").length.toString()

  const deliveredFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "DELIVERED").length.toString()

  const failedFlipstarterCount = podcastFlipstarters.filter(({ status }) => status === "FAILED").length.toString()

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-3xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          CasherPillar
        </p>
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

          <p>Last Funded - x</p>
          <p>Flipstarters ({podcastFlipstarters.length.toString()}) - Requesting Funding ({requestingFlipstarterCount}) - In Progress ({inProgressFlipstarterCount}) - Delivered ({deliveredFlipstarterCount}) - Failed ({failedFlipstarterCount})</p>
          <p>
            #1:
          </p>
          <p>
            Launched: x/x/x - x/x/x: Delivered
          </p>
        </div>
      </div>
    </main>
  );
}
