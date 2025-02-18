'use client'
import { useRef, useState } from 'react';
import './CharSkills.scss'
import Button from '@/app/components/Button/Button';
import { updateSkills } from '../actions';

export default function CharSkills({ ...props }) {
    const {
        athletics,
        athSpec,
        brawl,
        brawlSpec,
        craft,
        craftSpec,
        drive,
        driveSpec,
        firearms,
        firearmsSpec,
        larceny,
        larcenySpec,
        melee,
        meleeSpec,
        stealth,
        stealthSpec,
        survival,
        survivalSpec,
        animalkin,
        animalKinSpec,
        etiquette,
        etiquetteSpec,
        insight,
        insightSpec,
        intimidation,
        intimidationSpec,
        leadership,
        leadershipSpec,
        performance,
        performanceSpec,
        persuassion,
        persuassionSpec,
        streetwise,
        streetwiseSpec,
        subterfuge,
        subterfugeSpec,
        academics,
        academicsSpec,
        awareness,
        awarenessSpec,
        finance,
        financeSpec,
        investigation,
        investigationSpec,
        medicine,
        medicineSpec,
        occult,
        occultSpec,
        politics,
        politicsSpec,
        science,
        scienceSpec,
        technology,
        technologySpec,
        params
    } = props

    const [isEditing, setIsEditing] = useState(false);

    // character skills arrys and text fields
    const [charAth, setCharAth] = useState(athletics);
    const [charAthSpec, setCharAthSpec] = useState(athSpec);
    const [charBrawl, setCharBrawl] = useState(brawl);
    const [charBrawlSpec, setCharBrawlSpec] = useState(brawlSpec);
    const [charCraft, setCharCraft] = useState(craft);
    const [charCraftSpec, setCharCraftSpec] = useState(craftSpec);
    const [charDrive, setCharDrive] = useState(drive);
    const [charDriveSpec, setCharDriveSpec] = useState(driveSpec);
    const [charFirearms, setCharFirearms] = useState(firearms);
    const [charFirearmsSpec, setCharFirearmsSpec] = useState(firearmsSpec);
    const [charLarceny, setCharLarceny] = useState(larceny);
    const [charLarcenySpec, setCharLarcenySpec] = useState(larcenySpec);
    const [charMelee, setCharMelee] = useState(melee);
    const [charMeleeSpec, setCharMeleeSpec] = useState(meleeSpec);
    const [charStealth, setCharStealth] = useState(stealth);
    const [charStealthSpec, setCharStealthSpec] = useState(stealthSpec);
    const [charSurvival, setCharSurvival] = useState(survival);
    const [charSurvivalSpec, setCharSurvivalSpec] = useState(survivalSpec);
    const [charAnimalkin, setCharAnimalkin] = useState(animalkin);
    const [charAnimalKinSpec, setCharAnimalKinSpec] = useState(animalKinSpec);
    const [charEtiquette, setCharEtiquette] = useState(etiquette);
    const [charEtiquetteSpec, setCharEtiquetteSpec] = useState(etiquetteSpec);
    const [charInsight, setCharInsight] = useState(insight);
    const [charInsightSpec, setCharInsightSpec] = useState(insightSpec);
    const [charIntimidation, setCharIntimidation] = useState(intimidation);
    const [charIntimidationSpec, setCharIntimidationSpec] = useState(intimidationSpec);
    const [charLeadership, setCharLeadership] = useState(leadership);
    const [charLeadershipSpec, setcharLeadershipSpec] = useState(leadershipSpec);
    const [charPerformance, setCharPerformance] = useState(performance);
    const [charPerformanceSpec, setCharPerformanceSpec] = useState(performanceSpec);
    const [charPersuassion, setCharPersuassion] = useState(persuassion);
    const [charPersuassionSpec, setCharPersuassionSpec] = useState(persuassionSpec);
    const [charStreetwise, setCharStreetwise] = useState(streetwise);
    const [charStreetwiseSpec, setCharStreetwiseSpec] = useState(streetwiseSpec);
    const [charSubterfuge, setcharSubterfuge] = useState(subterfuge);
    const [charSubterfugeSpec, setCharSubterfugeSpec] = useState(subterfugeSpec);
    const [charAcademics, setCharAcademics] = useState(academics);
    const [charAcademicsSpec, setCharAcademicsSpec] = useState(academicsSpec);
    const [charAwareness, setCharAwareness] = useState(awareness);
    const [charAwarenessSpec, setCharAwarenessSpec] = useState(awarenessSpec);
    const [charFinance, setCharFinance] = useState(finance);
    const [charFinanceSpec, setCharFinanceSpec] = useState(financeSpec);
    const [charInvestigation, setCharInvestigation] = useState(investigation);
    const [charInvestigationSpec, setCharInvestigationSpec] = useState(investigationSpec);
    const [charMedicine, setCharMedicine] = useState(medicine);
    const [charMedicineSpec, setcharMedicineSpec] = useState(medicineSpec);
    const [charOccult, setCharOccult] = useState(occult);
    const [charOccultSpec, setcharOccultSpec] = useState(occultSpec);
    const [charPolitics, setCharPolitics] = useState(politics);
    const [charPoliticsSpec, setCharPoliticsSpec] = useState(politicsSpec);
    const [charScience, setCharScience] = useState(science);
    const [charScienceSpec, setCharScienceSpec] = useState(scienceSpec);
    const [charTechnology, setCharTechnology] = useState(technology);
    const [charTechnologySpec, setCharTechnologySpec] = useState(technologySpec);

    //character skill boolean array counts
    const [charAthCount, setCharAthCount] = useState(charAth.filter(Boolean).length);
    const [charBrawlCount, setCharBrawlCount] = useState(charBrawl.filter(Boolean).length);
    const [charCraftCount, setCharCraftCount] = useState(charCraft.filter(Boolean).length);
    const [charDriveCount, setCharDriveCount] = useState(charDrive.filter(Boolean).length);
    const [charFirearmsCount, setCharFirearmsCount] = useState(charFirearms.filter(Boolean).length);
    const [charLarcenyCount, setCharLarcenyCount] = useState(charLarceny.filter(Boolean).length);
    const [charMeleeCount, setCharMeleeCount] = useState(charMelee.filter(Boolean).length);
    const [charStealthCount, setCharStealthCount] = useState(charStealth.filter(Boolean).length);
    const [charSurvivalCount, setCharSurvivalCount] = useState(charSurvival.filter(Boolean).length);
    const [charAnimalkinCount, setCharAnimalkinCount] = useState(charAnimalkin.filter(Boolean).length);
    const [charEtiquetteCount, setCharEtiquetteCount] = useState(charEtiquette.filter(Boolean).length);
    const [charInsightCount, setCharInsightCount] = useState(charInsight.filter(Boolean).length);
    const [charIntimidationCount, setCharIntimidationCount] = useState(charIntimidation.filter(Boolean).length);
    const [charLeadershipCount, setCharLeadershipCount] = useState(charLeadership.filter(Boolean).length);
    const [charPerformanceCount, setCharPerformanceCount] = useState(charPerformance.filter(Boolean).length);
    const [charPersuassionCount, setCharPersuassionCount] = useState(charPersuassion.filter(Boolean).length);
    const [charStreetwiseCount, setCharStreetwiseCount] = useState(charStreetwise.filter(Boolean).length);
    const [charSubterfugeCount, setCharSubterfugeCount] = useState(charSubterfuge.filter(Boolean).length);
    const [charAcademicsCount, setCharAcademicsCount] = useState(charAcademics.filter(Boolean).length);
    const [charAwarenessCount, setCharAwarenessCount] = useState(charAwareness.filter(Boolean).length);
    const [charFinanceCount, setCharFinanceCount] = useState(charFinance.filter(Boolean).length);
    const [charInvestigationCount, setCharInvestigationCount] = useState(charInvestigation.filter(Boolean).length);
    const [charMedicineCount, setCharMedicineCount] = useState(charMedicine.filter(Boolean).length);
    const [charOccultCount, setCharOccultCount] = useState(charOccult.filter(Boolean).length);
    const [charPoliticsCount, setCharPoliticsCount] = useState(charPolitics.filter(Boolean).length);
    const [charScienceCount, setCharScienceCount] = useState(charScience.filter(Boolean).length);
    const [charTechnologyCount, setCharTechnologyCount] = useState(charTechnology.filter(Boolean).length);


    const form = useRef<any | undefined>(null);


    function editSkills() {
        setIsEditing(isEditing => !isEditing)
    }


    function cancelFormEdit() {
        setIsEditing(isEditing => !isEditing)
    }




    async function handleFormSubmit(event: any, form: any) {
        event.preventDefault();

        console.log(event)
        let ath = [
            form.current[0].checked,
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked
        ]
        let athSpec = form.current[5].value
        let bra = [
            form.current[6].checked,
            form.current[7].checked,
            form.current[8].checked,
            form.current[9].checked,
            form.current[10].checked
        ]
        let braSpec = form.current[11].value
        let cra = [
            form.current[12].checked,
            form.current[13].checked,
            form.current[14].checked,
            form.current[15].checked,
            form.current[16].checked
        ]
        let craSpec = form.current[17].value
        let dri = [
            form.current[18].checked,
            form.current[19].checked,
            form.current[20].checked,
            form.current[21].checked,
            form.current[22].checked
        ]
        let driSpec = form.current[23].value
        let fir = [
            form.current[24].checked,
            form.current[25].checked,
            form.current[26].checked,
            form.current[27].checked,
            form.current[28].checked
        ]
        let firSpec = form.current[29].value
        let lar = [
            form.current[30].checked,
            form.current[31].checked,
            form.current[32].checked,
            form.current[33].checked,
            form.current[34].checked
        ]
        let larSpec = form.current[35].value
        let mel = [
            form.current[36].checked,
            form.current[37].checked,
            form.current[38].checked,
            form.current[39].checked,
            form.current[40].checked
        ]
        let melSpec = form.current[41].value
        let ste = [
            form.current[42].checked,
            form.current[43].checked,
            form.current[44].checked,
            form.current[45].checked,
            form.current[46].checked
        ]
        let steSpec = form.current[47].value
        let sur = [
            form.current[48].checked,
            form.current[49].checked,
            form.current[50].checked,
            form.current[51].checked,
            form.current[52].checked
        ]
        let surSpec = form.current[53].value
        let ani = [
            form.current[54].checked,
            form.current[55].checked,
            form.current[56].checked,
            form.current[57].checked,
            form.current[58].checked
        ]
        let aniSpec = form.current[59].value
        let eti = [
            form.current[60].checked,
            form.current[61].checked,
            form.current[62].checked,
            form.current[63].checked,
            form.current[64].checked
        ]
        let etiSpec = form.current[65].value
        let ins = [
            form.current[66].checked,
            form.current[67].checked,
            form.current[68].checked,
            form.current[69].checked,
            form.current[70].checked
        ]
        let insSpec = form.current[71].value
        let int = [
            form.current[72].checked,
            form.current[73].checked,
            form.current[74].checked,
            form.current[75].checked,
            form.current[76].checked
        ]
        let intSpec = form.current[77].value
        let lea = [
            form.current[78].checked,
            form.current[79].checked,
            form.current[80].checked,
            form.current[81].checked,
            form.current[82].checked
        ]
        let leaSpec = form.current[83].value
        let perf = [
            form.current[84].checked,
            form.current[85].checked,
            form.current[86].checked,
            form.current[87].checked,
            form.current[88].checked
        ]
        let perfSpec = form.current[89].value
        let per = [
            form.current[90].checked,
            form.current[91].checked,
            form.current[92].checked,
            form.current[93].checked,
            form.current[94].checked
        ]
        let perSpec = form.current[95].value
        let str = [
            form.current[96].checked,
            form.current[97].checked,
            form.current[98].checked,
            form.current[99].checked,
            form.current[100].checked
        ]
        let strSpec = form.current[101].value
        let sub = [
            form.current[102].checked,
            form.current[103].checked,
            form.current[104].checked,
            form.current[105].checked,
            form.current[106].checked
        ]
        let subSpec = form.current[107].value
        let aca = [
            form.current[108].checked,
            form.current[109].checked,
            form.current[100].checked,
            form.current[111].checked,
            form.current[112].checked
        ]
        let acaSpec = form.current[113].value
        let awa = [
            form.current[114].checked,
            form.current[115].checked,
            form.current[116].checked,
            form.current[117].checked,
            form.current[118].checked
        ]
        let awaSpec = form.current[119].value
        let fin = [
            form.current[120].checked,
            form.current[121].checked,
            form.current[122].checked,
            form.current[123].checked,
            form.current[124].checked
        ]
        let finSpec = form.current[125].value
        let inv = [
            form.current[126].checked,
            form.current[127].checked,
            form.current[128].checked,
            form.current[129].checked,
            form.current[130].checked
        ]
        let invSpec = form.current[131].value
        let med = [
            form.current[132].checked,
            form.current[133].checked,
            form.current[134].checked,
            form.current[135].checked,
            form.current[136].checked
        ]
        let medSpec = form.current[137].value
        let occ = [
            form.current[138].checked,
            form.current[139].checked,
            form.current[140].checked,
            form.current[141].checked,
            form.current[142].checked
        ]
        let occSpec = form.current[143].value
        let pol = [
            form.current[144].checked,
            form.current[145].checked,
            form.current[146].checked,
            form.current[147].checked,
            form.current[148].checked
        ]
        let polSpec = form.current[149].value
        let sci = [
            form.current[150].checked,
            form.current[151].checked,
            form.current[152].checked,
            form.current[153].checked,
            form.current[154].checked
        ]
        let sciSpec = form.current[155].value
        let tec = [
            form.current[156].checked,
            form.current[157].checked,
            form.current[158].checked,
            form.current[159].checked,
            form.current[160].checked
        ]
        let tecSpec = form.current[161].value
        let id = form.current[162].value

        let formData = {
            id,
            ath,
            athSpec,
            bra,
            braSpec,
            cra,
            craSpec,
            dri,
            driSpec,
            fir,
            firSpec,
            lar,
            larSpec,
            mel,
            melSpec,
            ste,
            steSpec,
            sur,
            surSpec,
            ani,
            aniSpec,
            eti,
            etiSpec,
            ins,
            insSpec,
            int,
            intSpec,
            lea,
            leaSpec,
            perf,
            perfSpec,
            per,
            perSpec,
            str,
            strSpec,
            sub,
            subSpec,
            aca,
            acaSpec,
            awa,
            awaSpec,
            fin,
            finSpec,
            inv,
            invSpec,
            med,
            medSpec,
            occ,
            occSpec,
            pol,
            polSpec,
            sci,
            sciSpec,
            tec,
            tecSpec,

        }


        updateSkills(formData);

        setCharAth(ath);
        setCharAthSpec(athSpec);
        setCharBrawl(bra);
        setCharBrawlSpec(braSpec);
        setCharCraft(cra);
        setCharCraftSpec(craSpec);
        setCharDrive(dri);
        setCharDriveSpec(driSpec);
        setCharFirearms(fir);
        setCharFirearmsSpec(firSpec);
        setCharLarceny(lar);
        setCharLarcenySpec(larSpec);
        setCharMelee(mel);
        setCharMeleeSpec(melSpec);
        setCharStealth(ste);
        setCharStealthSpec(steSpec);
        setCharSurvival(sur);
        setCharSurvivalSpec(surSpec);
        setCharAnimalkin(ani);
        setCharAnimalKinSpec(aniSpec);
        setCharEtiquette(eti);
        setCharEtiquetteSpec(etiSpec);
        setCharInsight(ins);
        setCharInsightSpec(insSpec);
        setCharIntimidation(int);
        setCharIntimidationSpec(intSpec);
        setCharLeadership(lea);
        setcharLeadershipSpec(leaSpec);
        setCharPerformance(perf);
        setCharPerformanceSpec(perfSpec);
        setCharPersuassion(per);
        setCharPersuassionSpec(perSpec);
        setCharStreetwise(str);
        setCharStreetwiseSpec(strSpec);
        setcharSubterfuge(sub);
        setCharSubterfugeSpec(subSpec);
        setCharAcademics(aca);
        setCharAcademicsSpec(acaSpec);
        setCharAwareness(awa);
        setCharAwarenessSpec(awaSpec);
        setCharFinance(fin);
        setCharFinanceSpec(finSpec);
        setCharInvestigation(inv);
        setCharInvestigationSpec(invSpec);
        setCharMedicine(med);
        setcharMedicineSpec(medSpec);
        setCharOccult(occ);
        setcharOccultSpec(occSpec);
        setCharPolitics(pol);
        setCharPoliticsSpec(polSpec);
        setCharScience(sci);
        setCharScienceSpec(sciSpec);
        setCharTechnology(tec);
        setCharTechnologySpec(tecSpec);


        setCharAthCount(ath.filter(Boolean).length);
        setCharBrawlCount(bra.filter(Boolean).length);
        setCharCraftCount(cra.filter(Boolean).length);
        setCharDriveCount(dri.filter(Boolean).length);
        setCharFirearmsCount(fir.filter(Boolean).length);
        setCharLarcenyCount(lar.filter(Boolean).length);
        setCharMeleeCount(mel.filter(Boolean).length);
        setCharStealthCount(ste.filter(Boolean).length);
        setCharSurvivalCount(sur.filter(Boolean).length);
        setCharAnimalkinCount(ani.filter(Boolean).length);
        setCharEtiquetteCount(eti.filter(Boolean).length);
        setCharInsightCount(ins.filter(Boolean).length);
        setCharIntimidationCount(int.filter(Boolean).length);
        setCharLeadershipCount(lea.filter(Boolean).length);
        setCharPerformanceCount(perf.filter(Boolean).length);
        setCharPersuassionCount(per.filter(Boolean).length);
        setCharStreetwiseCount(str.filter(Boolean).length);
        setCharSubterfugeCount(sub.filter(Boolean).length);
        setCharAcademicsCount(aca.filter(Boolean).length);
        setCharAwarenessCount(awa.filter(Boolean).length);
        setCharFinanceCount(fin.filter(Boolean).length);
        setCharInvestigationCount(inv.filter(Boolean).length);
        setCharMedicineCount(med.filter(Boolean).length);
        setCharOccultCount(occ.filter(Boolean).length);
        setCharPoliticsCount(pol.filter(Boolean).length);
        setCharScienceCount(sci.filter(Boolean).length);
        setCharTechnologyCount(tec.filter(Boolean).length);

        setIsEditing(isEditing => !isEditing);


    }

    return (
        <>
            <div id="sectionTitle">
                <div className="sectionTitle">Skills</div>
                <a onClick={() => editSkills()}><i
                    className="icon icon-edit-b"></i></a>
            </div>
            {!isEditing && <div id="characterSheetSkillsContainer">
                <div className='container sm:columns-3'>
                    <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterName skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>Athletics</div>

                                <div className="levels">
                                    {charAthCount > 0 && <div className='skillCount pr-2'>{charAthCount}</div>}
                                    {charAth.map((athletics: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', athletics ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charAthSpec}
                            </div>
                        </div>
                        <div className="characterChronicle skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>brawl</div>

                                <div className="levels">
                                    {charBrawlCount > 0 && <div className='skillCount pr-2'>{charBrawlCount}</div>}
                                    {charBrawl.map((brawl: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', brawl ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charBrawlSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>craft</div>

                                <div className="levels">
                                    {charCraftCount > 0 && <div className='skillCount pr-2'>{charCraftCount}</div>}
                                    {charCraft.map((craft: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', craft ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charCraftSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>drive</div>

                                <div className="levels">
                                    {charDriveCount > 0 && <div className='skillCount pr-2'>{charDriveCount}</div>}
                                    {charDrive.map((drive: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', drive ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charDriveSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>firearms</div>

                                <div className="levels">
                                    {charFirearmsCount > 0 && <div className='skillCount pr-2'>{charFirearmsCount}</div>}
                                    {charFirearms.map((firearms: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', firearms ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charFirearmsSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>larceny</div>

                                <div className="levels">
                                    {charLarcenyCount > 0 && <div className='skillCount pr-2'>{charLarcenyCount}</div>}
                                    {charLarceny.map((larceny: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', larceny ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charLarcenySpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>melee</div>

                                <div className="levels">
                                    {charMeleeCount > 0 && <div className='skillCount pr-2'>{charMeleeCount}</div>}
                                    {charMelee.map((melee: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', melee ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charMeleeSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>stealth</div>

                                <div className="levels">
                                    {charStealthCount > 0 && <div className='skillCount pr-2'>{charStealthCount}</div>}
                                    {charStealth.map((stealth: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', stealth ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charStealthSpec}
                            </div>
                        </div>
                        <div className="characterSire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>survival</div>

                                <div className="levels">
                                    {charSurvivalCount > 0 && <div className='skillCount pr-2'>{charSurvivalCount}</div>}
                                    {charSurvival.map((survival: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', survival ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charSurvivalSpec}
                            </div>
                        </div>
                    </div>
                    <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterConcept skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>animal ken</div>

                                <div className="levels">
                                    {charAnimalkinCount > 0 && <div className='skillCount pr-2'>{charAnimalkinCount}</div>}
                                    {charAnimalkin.map((animalkin: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', animalkin ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charAnimalKinSpec}
                            </div>
                        </div>
                        <div className="characterAmbition skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>etiquette</div>

                                <div className="levels">
                                    {charEtiquetteCount > 0 && <div className='skillCount pr-2'>{charEtiquetteCount}</div>}
                                    {charEtiquette.map((etiquette: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', etiquette ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charEtiquetteSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>insight</div>

                                <div className="levels">
                                    {charInsightCount > 0 && <div className='skillCount pr-2'>{charInsightCount}</div>}
                                    {charInsight.map((insight: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', insight ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charInsightSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>intimidation</div>

                                <div className="levels">
                                    {charIntimidationCount > 0 && <div className='skillCount pr-2'>{charIntimidationCount}</div>}
                                    {charIntimidation.map((intimidation: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', intimidation ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charIntimidationSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>leadership</div>

                                <div className="levels">
                                    {charLeadershipCount > 0 && <div className='skillCount pr-2'>{charLeadershipCount}</div>}
                                    {charLeadership.map((leadership: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', leadership ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charLeadershipSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>performance</div>

                                <div className="levels">
                                    {charPerformanceCount > 0 && <div className='skillCount pr-2'>{charPerformanceCount}</div>}
                                    {charPerformance.map((performance: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', performance ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charPerformanceSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>persuassion</div>

                                <div className="levels">
                                    {charPersuassionCount > 0 && <div className='skillCount pr-2'>{charPersuassionCount}</div>}
                                    {charPersuassion.map((persuassion: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', persuassion ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charPersuassionSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>streetwise</div>

                                <div className="levels">
                                    {charStreetwiseCount > 0 && <div className='skillCount pr-2'>{charStreetwiseCount}</div>}
                                    {charStreetwise.map((streetwise: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', streetwise ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charStreetwiseSpec}
                            </div>
                        </div>
                        <div className="characterDesire skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>subterfuge</div>

                                <div className="levels">
                                    {charSubterfugeCount > 0 && <div className='skillCount pr-2'>{charSubterfugeCount}</div>}
                                    {charSubterfuge.map((subterfuge: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', subterfuge ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charSubterfugeSpec}
                            </div>
                        </div>
                    </div>
                    <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">
                        <div className="characterPredator skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>academics</div>

                                <div className="levels">
                                    {charAcademicsCount > 0 && <div className='skillCount pr-2'>{charAcademicsCount}</div>}
                                    {charAcademics.map((academics: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', academics ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charAcademicsSpec}
                            </div>
                        </div>
                        <div className="characterClan skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>awareness</div>

                                <div className="levels">
                                    {charAwarenessCount > 0 && <div className='skillCount pr-2'>{charAwarenessCount}</div>}
                                    {charAwareness.map((awareness: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', awareness ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charAwarenessSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>finance</div>

                                <div className="levels">
                                    {charFinanceCount > 0 && <div className='skillCount pr-2'>{charFinanceCount}</div>}
                                    {charFinance.map((finance: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', finance ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charFinanceSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>investigation</div>

                                <div className="levels">
                                    {charInvestigationCount > 0 && <div className='skillCount pr-2'>{charInvestigationCount}</div>}
                                    {charInvestigation.map((investigation: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', investigation ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charInvestigationSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>medicine</div>

                                <div className="levels">
                                    {charMedicineCount > 0 && <div className='skillCount pr-2'>{charMedicineCount}</div>}
                                    {charMedicine.map((medicine: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', medicine ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charMedicineSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>occult</div>

                                <div className="levels">
                                    {charOccultCount > 0 && <div className='skillCount pr-2'>{charOccultCount}</div>}
                                    {charOccult.map((occult: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', occult ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charOccultSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>politics</div>

                                <div className="levels">
                                    {charPoliticsCount > 0 && <div className='skillCount pr-2'>{charPoliticsCount}</div>}
                                    {charPolitics.map((politics: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', politics ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charPoliticsSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>science</div>

                                <div className="levels">
                                    {charScienceCount > 0 && <div className='skillCount pr-2'>{charScienceCount}</div>}
                                    {charScience.map((science: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', science ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charScienceSpec}
                            </div>
                        </div>
                        <div className="characterGeneration skillItem">
                            <div className="levelContainer sm:columns-2 flex-wrap">
                                <div className='flex min-w-24'>technology</div>

                                {charTechnologyCount > 0 && <div className='skillCount pr-2'>{charTechnologyCount}</div>}
                                <div className="levels">
                                    {charTechnology.map((technology: any, index: any) => {
                                        return (
                                            <div key={index} className={['circle', technology ? 'filled' : ''].join(' ')} ></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="specialty">
                                {charTechnologySpec}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


            {isEditing &&
                <form ref={form} id="characterSheetSkillsFormContainer" onSubmit={(e) => handleFormSubmit(e, form)}>

                    <div className="container sm:columns-3">
                        <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">

                            <div className="itemWrapper">
                                <div className="strengthAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="athletics">Athletics </label></div>

                                            <div className="levels ">
                                                {charAthCount > 0 && <div className='skillCount pr-2'>{charAthCount}</div>}
                                                {charAth.map((athletics: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={athletics} defaultChecked={athletics} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charAthSpec} id="skillSpecialty" ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="dexterityAttribute skillItem">

                                    <div className="form-group " >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="brawl">Brawl </label></div>

                                            <div className="levels ">
                                                {charBrawlCount > 0 && <div className='skillCount pr-2'>{charBrawlCount}</div>}
                                                {charBrawl.map((brawl: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={brawl} defaultChecked={brawl} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charBrawlSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="craft">Craft </label></div>

                                            <div className="levels ">
                                                {charCraftCount > 0 && <div className='skillCount pr-2'>{charCraftCount}</div>}
                                                {charCraft.map((craft: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={craft} defaultChecked={craft} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charCraftSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group " >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="drive">Drive </label></div>

                                            <div className="levels ">
                                                {charDriveCount > 0 && <div className='skillCount pr-2'>{charDriveCount}</div>}
                                                {charDrive.map((drive: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={drive} defaultChecked={drive} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charDriveSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="firearms">Firearms </label></div>

                                            <div className="levels ">
                                                {charFirearmsCount > 0 && <div className='skillCount pr-2'>{charFirearmsCount}</div>}
                                                {charFirearms.map((firearms: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={firearms} defaultChecked={firearms} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charFirearmsSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="larceny">Larceny </label></div>

                                            <div className="levels ">
                                                {charLarcenyCount > 0 && <div className='skillCount pr-2'>{charLarcenyCount}</div>}
                                                {charLarceny.map((larceny: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={larceny} defaultChecked={larceny} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charLarcenySpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="melee">Melee </label></div>

                                            <div className="levels ">
                                                {charMeleeCount > 0 && <div className='skillCount pr-2'>{charMeleeCount}</div>}
                                                {charMelee.map((melee: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={melee} defaultChecked={melee} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charMeleeSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="stealth">Stealth </label></div>

                                            <div className="levels ">
                                                {charStealthCount > 0 && <div className='skillCount pr-2'>{charStealthCount}</div>}
                                                {charStealth.map((stealth: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={stealth} defaultChecked={stealth} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charStealthSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="itemWrapper">
                                <div className="staminaAttribute skillItem">

                                    <div className="form-group " >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="survival">Survival </label></div>

                                            <div className="levels ">
                                                {charSurvivalCount > 0 && <div className='skillCount pr-2'>{charSurvivalCount}</div>}
                                                {charSurvival.map((survival: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={survival} defaultChecked={survival} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charSurvivalSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">

                            <div className="itemWrapper">
                                <div className="characterConcept skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="animalken">Animal Ken </label></div>

                                            <div className="levels ">
                                                {charAnimalkinCount > 0 && <div className='skillCount pr-2'>{charAnimalkinCount}</div>}
                                                {charAnimalkin.map((animalkin: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={animalkin} defaultChecked={animalkin} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charAnimalKinSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterAmbition skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="etiquette">Etiquette </label></div>

                                            <div className="levels ">
                                                {charEtiquetteCount > 0 && <div className='skillCount pr-2'>{charEtiquetteCount}</div>}
                                                {charEtiquette.map((etiquette: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={etiquette} defaultChecked={etiquette} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charEtiquetteSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="insight">Insight </label></div>

                                            <div className="levels ">
                                                {charInsightCount > 0 && <div className='skillCount pr-2'>{charInsightCount}</div>}
                                                {charInsight.map((insight: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={insight} defaultChecked={insight} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charInsightSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="intimidation">Intimidation </label></div>

                                            <div className="levels ">
                                                {charIntimidationCount > 0 && <div className='skillCount pr-2'>{charIntimidationCount}</div>}
                                                {charIntimidation.map((intimidation: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={intimidation} defaultChecked={intimidation} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charIntimidationSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="leadership">Leadership </label></div>

                                            <div className="levels ">
                                                {charLeadershipCount > 0 && <div className='skillCount pr-2'>{charLeadershipCount}</div>}
                                                {charLeadership.map((leadership: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={leadership} defaultChecked={leadership} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charLeadershipSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="performance">Performance </label></div>

                                            <div className="levels ">
                                                {charPerformanceCount > 0 && <div className='skillCount pr-2'>{charPerformanceCount}</div>}
                                                {charPerformance.map((performance: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={performance} defaultChecked={performance} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charPerformanceSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="persuassion">Persuassion </label></div>

                                            <div className="levels ">
                                                {charPersuassionCount > 0 && <div className='skillCount pr-2'>{charPersuassionCount}</div>}
                                                {charPerformance.map((performance: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={performance} defaultChecked={performance} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charPerformanceSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="streetwise">Streetwise </label></div>

                                            <div className="levels ">
                                                {charStreetwiseCount > 0 && <div className='skillCount pr-2'>{charStreetwiseCount}</div>}
                                                {charStreetwise.map((streetwise: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={streetwise} defaultChecked={streetwise} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charStreetwiseSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterDesire skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="subterfuge">Subterfuge </label></div>

                                            <div className="levels ">
                                                {charSubterfugeCount > 0 && <div className='skillCount pr-2'>{charSubterfugeCount}</div>}
                                                {charSubterfuge.map((subterfuge: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={subterfuge} defaultChecked={subterfuge} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charSubterfugeSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="xl:mx-12 sm:mx-0 max-w-xs w-full mx-auto w-xs">

                            <div className="itemWrapper">
                                <div className="characterPredator skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="academics">Academics </label></div>

                                            <div className="levels ">
                                                {charAcademicsCount > 0 && <div className='skillCount pr-2'>{charAcademicsCount}</div>}
                                                {charAcademics.map((academics: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={academics} defaultChecked={academics} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charAcademicsSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterClan skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="awareness">Awareness </label></div>

                                            <div className="levels ">
                                                {charAwarenessCount > 0 && <div className='skillCount pr-2'>{charAwarenessCount}</div>}
                                                {charAwareness.map((awareness: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={awareness} defaultChecked={awareness} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charAwarenessSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="finance">Finance </label></div>

                                            <div className="levels ">
                                                {charFinanceCount > 0 && <div className='skillCount pr-2'>{charFinanceCount}</div>}
                                                {charFinance.map((finance: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={finance} defaultChecked={finance} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charFinanceSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="investigation">Investigation </label></div>

                                            <div className="levels ">
                                                {charInvestigationCount > 0 && <div className='skillCount pr-2'>{charInvestigationCount}</div>}
                                                {charInvestigation.map((investigation: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={investigation} defaultChecked={investigation} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charInvestigationSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="medicine">Medicine </label></div>

                                            <div className="levels ">
                                                {charMedicineCount > 0 && <div className='skillCount pr-2'>{charMedicineCount}</div>}
                                                {charMedicine.map((medicine: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={medicine} defaultChecked={medicine} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charMedicineSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="occult">Occult </label></div>

                                            <div className="levels ">
                                                {charOccultCount > 0 && <div className='skillCount pr-2'>{charOccultCount}</div>}
                                                {charOccult.map((occult: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={occult} defaultChecked={occult} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charOccultSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="politics">politics </label></div>

                                            <div className="levels ">
                                                {charPoliticsCount > 0 && <div className='skillCount pr-2'>{charPoliticsCount}</div>}
                                                {charPolitics.map((politics: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={politics} defaultChecked={politics} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charPoliticsSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="science">science </label></div>

                                            <div className="levels ">
                                                {charScienceCount > 0 && <div className='skillCount pr-2'>{charScienceCount}</div>}
                                                {charScience.map((science: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={science} defaultChecked={science} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charScienceSpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="itemWrapper">
                                <div className="characterGeneration skillItem">

                                    <div className="form-group" >
                                        <div className="levelcontainer sm:columns-2 flex-wrap">
                                            <div className='flex min-w-24'><label htmlFor="technology">technology </label></div>

                                            <div className="levels ">
                                                {charTechnologyCount > 0 && <div className='skillCount pr-2'>{charTechnologyCount}</div>}
                                                {charTechnology.map((technology: any, index: any) => {
                                                    return (
                                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={technology} defaultChecked={technology} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="specialtyWrapper">
                                            <textarea className="border border-slate-200 dark:border-red-600 dark:bg-neutral-900" defaultValue={charTechnologySpec} id="skillSpecialty"  ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <input type="hidden" name="id" defaultValue={params} />
                    <div className="buttonContainer">
                        <Button type="submit">Update</Button>
                        <Button type="cancel" buttonClick={cancelFormEdit}>Cancel</Button>
                    </div>

                </form>










            }




        </>
    )
}