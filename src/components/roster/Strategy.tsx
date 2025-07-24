import colOfDyn from "../../assets/col_of_dyn.png"
import colOfStat from "../../assets/col_of_stat.png"
import colOfSyn from "../../assets/col_of_syn.png"
import logo from "../../assets/inq_logo_dark.png"
import mug from "../../assets/inq_mug.png"
import Typography from "../Typography.tsx";

type StrategyBannerProps = {
    img: string;
    text: string;
}

const StrategyBanner = ({img, text}: StrategyBannerProps) => {
    return (
        <div className="items-center justify-center flex flex-col space-y-5 max-w-80">
            <img src={img} alt="" className="max-w-4/5"/>
            <Typography variant="body">{text}</Typography>
        </div>
    )
}

const Strategy = () => {
    return (
        <div>
            <div className="bg-transparent py-20 relative">
                <div>
                    <div className="absolute top-0 py-10 size-full -z-1 bg-zinc-900">
                        <img src={logo} alt="" className="h-full object-contain m-auto" />
                    </div>
                    <div className="justify-center flex flex-wrap gap-20 text-justify z-10">
                        <StrategyBanner img={colOfDyn} text="The Inquest eclipses the College of Synergetics by relentlessly pursuing tangible power and domination of the Eternal Alchemy through its corporate-style hierarchy, ruthless testing, and single-minded drive to harness knowledge—even sacrificing ethics and individual inventors—whereas Synergetics indulges in abstract theorizing and pattern-seeking that, while intellectually cohesive, too often yields little visible impact or influence."/>
                        <StrategyBanner img={colOfStat} text="The Inquest utterly outstrips the College of Statics by channeling relentless ambition into concrete dominion over the Eternal Alchemy, utilizing its corporate‑style hierarchy, ruthless secrecy, and ethically unbound experimentation to seize control and sabotage competition, whereas Statics—under Dean Ludo—may pride itself on meticulous, robust construction and engineering of levitating stones and cities, but operates as a conservative, slow‑moving civil engineer faction whose caution and perfectionism leave it unable to match the Inquest’s rapid, high-stakes ascendancy in asuran power structures." />
                        <StrategyBanner img={colOfSyn} text="The Inquest surpasses the College of Dynamics by prioritizing high‑stakes, large‑scale mastery of the Eternal Alchemy—leveraging a structured, results‑driven hierarchy and ethically flexible methods to consistently achieve transformative breakthroughs—whereas Dynamics, despite its brilliance in spontaneous experimentation, ingenuity, and rapid prototyping under Dean Zudo, remains tethered to fleeting inventions whose instability and unpredictability pale beside the Inquest’s relentless quest for cosmic control and enduring influence." />
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 p-5 relative overflow-hidden">
                <div className="flex flex-col max-w-290 mx-auto lg:flex-row justify-center items-center p-2 pb-0 pt-5 rounded-2xl border shadow-lg overflow-hidden">
                   <div className="space-y-5 lg:w-7/12 p-3 lg:p-8 lg:pt-4 flex-2/3">
                        <Typography variant="h7" className="text-left">Where Better Meets Best</Typography>
                        <Typography variant="body" className="text-left">Welcome to the Improvetimized Strategy Krewe, where innovation and teamwork come together in perfect harmony. By combining sharp minds and sharper ambition, we forge plans that are not just better but flawlessly executed. Every member of our krewe plays a vital role, working in unison to streamline destruction, maximize impact, and leave nothing to chance.</Typography>
                        <Typography variant="body" className="text-left">The Improvetimized Strategy Krewe: Because “good enough” is for amateurs, and mediocrity is so yesterday.</Typography>
                    </div>
                    <div className="flex-1/3 lg:w-5/12 p-0 min-w-[250px] max-w-[400px]">
                        <img
                            className="rounded-xl w-full object-cover"
                            src={mug}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategy;