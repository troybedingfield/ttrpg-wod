import './page.scss'
import { redirect } from "next/navigation";
import { createClient } from '@/utils/supabase/server'
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import CharAttributes from "../CharAttributes/CharAttributes";
import CharSkills from '../CharSkills/CharSkills';
import CharDisciplines from '../CharDisciplines/CharDisciplines';
import AddDiscipline from '../AddDiscipline/AddDiscipline';
import CharTTCB from '../CharTTCB/CharTTCB';
import CharAdvantages from '../CharAdvantages/CharAdvantages';
import CharFlaws from '../CharFlaws/CharFlaws';
import CharBloodPotency from '../CharBloodPotency/CharBloodPotency';
import CharExperience from '../CharExperience/CharExperience';
import CharBioAndNotes from '../CharBioAndNotes/CharBioAndNotes';
import CharHealthAndWillpower from '../CharHealthAndWillpower/CharHealthAndWillpower';
import CharResonanceHungerHumanity from '../CharResonanceHungerHumanity/CharResonanceHungerHumanity';

export default async function Character({ params, ...props }: { params: { characterID: number } }) {
    // const { id } = props

    const charID = params.characterID

    console.log(charID)

    const supabase = createClient()

    // const { data: characters } = await supabase.from("characterInfo").select();

    const { data: character, error: charError } = await supabase
        .from('character')
        .select()
        .eq('id', params.characterID)


    const { data: charAttributes, error: charAttError } = await supabase
        .from('charAttributes')
        .select()
        .eq('id', params.characterID)

    const { data: charSkills, error: charSkillError } = await supabase
        .from('charSkills')
        .select()
        .eq('id', params.characterID)

    const { data: charDisciplines, error: charDiscError } = await supabase
        .from('charDisciplines')
        .select()
        .eq('id', params.characterID)
        .order('dis_id', { ascending: true });


    const { data: charTTCB, error: charTTCBError } = await supabase
        .from('charTTCB')
        .select()
        .eq('id', params.characterID)

    const { data: charAdvantages, error: charAdvError } = await supabase
        .from('charAdvantages')
        .select()
        .eq('id', params.characterID)
        .order('adv_id', { ascending: true });

    const { data: charFlaws, error: charFlawError } = await supabase
        .from('charFlaws')
        .select()
        .eq('id', params.characterID)
        .order('flaw_id', { ascending: true });

    const { data: charBloodPotency, error: charBPError } = await supabase
        .from('charBloodPotency')
        .select()
        .eq('id', params.characterID)

    const { data: charExperience, error: charExpError } = await supabase
        .from('charExperience')
        .select()
        .eq('id', params.characterID)

    const { data: charBioAndNotes, error: charBNError } = await supabase
        .from('charBioAndNotes')
        .select()
        .eq('id', params.characterID)

    const { data: charHealthAndWillpower, error: charHWError } = await supabase
        .from('charHealthAndWillpower')
        .select()
        .eq('id', params.characterID)

    const { data: charResonanceHungerHumanity, error: charRHHError } = await supabase
        .from('charRHH')
        .select()
        .eq('id', params.characterID)



    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }



    return (

        <div className='charaterSheetContainer mt-8 mb-16'>
            {charExperience?.map(({ exp_id, ...data }) => {
                return (

                    <CharExperience key={exp_id} params={params} data={data} />

                )
            })}
            {character?.map(({ id, char_id, charName: name, charChronicle: chronicle, charSire: sire, charConcept: concept, charAmbition: ambition, charDesire: desire, charPredator: predatorType, charClan: clan, charGen: generation }, character) => {

                return (


                    <CharacterInfo
                        params={params}
                        key={char_id}
                        name={name}
                        chronicle={chronicle}
                        sire={sire}
                        concept={concept}
                        ambition={ambition}
                        desire={desire}
                        predator={predatorType}
                        clan={clan}
                        generation={generation} />

                )
            })}

            {charHealthAndWillpower?.map(({ hw_id, ...data }) => {
                return (

                    <CharHealthAndWillpower key={hw_id} params={params} data={data} />

                )
            })}


            {charResonanceHungerHumanity?.map(({ rhh_id, ...data }) => {
                return (

                    <CharResonanceHungerHumanity key={rhh_id} params={params} data={data} />

                )
            })}



            {charAttributes?.map(({ id, att_id, charStr: str, charDex: dex, charStam: stam, charChar: char, charMan: man, charComp: comp, charInt: int, charWits: wits, charRes: res }, character) => {

                return (

                    <CharAttributes
                        params={params}
                        key={att_id}
                        str={str}
                        dex={dex}
                        stam={stam}
                        char={char}
                        man={man}
                        comp={comp}
                        int={int}
                        wits={wits}
                        res={res} />


                )
            })}




            {charSkills?.map(({
                id,
                charAth: athletics,
                charAthSpec: athleticsSpec,
                charBrawl: brawl,
                charBrawlSpec: brawlSpec,
                charCraft: craft,
                chartCraftSpec: craftSpec,
                charDrive: drive,
                charDriveSpec: driveSpec,
                charFire: firearms,
                charFireSpec: firearmsSpec,
                charLarc: larceny,
                charLarcSpec: larcenySpec,
                charMelee: melee,
                charMeleeSpec: meleeSpec,
                charStealth: stealth,
                charStealthSpec: stealthSpec,
                charSurv: survival,
                charSurvSpec: survivalSpec,
                charAK: animalKin,
                charAKSpec: animalKinSpec,
                charEtiq: etiquette,
                charEtiqSPec: etiquetteSpec,
                charInsi: insight,
                charInsiSpec: insightSpec,
                charIntim: intimidation,
                charIntimSpec: intimidationSpec,
                charLead: leadership,
                charLeadSpec: leadershipSpec,
                charPerf: performance,
                charPerfSpec: performanceSpec,
                charPers: persuassion,
                charPersSpec: persuassionSpec,
                charStreet: streetwise,
                charStreetSpec: streetwiseSpec,
                charSubt: subterfuge,
                charSubtSpec: subterfugeSpec,
                charAcad: academics,
                charAcadSpec: academicsSpec,
                charAware: awareness,
                charAwareSpec: awarenessSpec,
                charFin: finance,
                charFinSpec: financeSpec,
                charInvest: investigation,
                charInvestSpec: investigationSpec,
                charMed: medicine,
                charMedSpec: medicineSpec,
                charOccult: occult,
                charOccultSpec: occultSpec,
                charPol: politics,
                charPolSpec: politicsSpec,
                charSci: science,
                charSciSpec: scienceSpec,
                charTech: technology,
                charTechSpec: technologySpec,
                skill_id: skill_id }, character) => {
                return (

                    <CharSkills
                        params={params}
                        key={skill_id}
                        athletics={athletics}
                        athSpec={athleticsSpec}
                        brawl={brawl}
                        brawlSpec={brawlSpec}
                        craft={craft}
                        craftSpec={craftSpec}
                        drive={drive}
                        driveSpec={driveSpec}
                        firearms={firearms}
                        firearmsSpec={firearmsSpec}
                        larceny={larceny}
                        larcenySpec={larcenySpec}
                        melee={melee}
                        meleeSpec={meleeSpec}
                        stealth={stealth}
                        stealthSpec={stealthSpec}
                        survival={survival}
                        survivalSpec={survivalSpec}
                        animalkin={animalKin}
                        animalKinSpec={animalKinSpec}
                        etiquette={etiquette}
                        etiquetteSpec={etiquetteSpec}
                        insight={insight}
                        insightSpec={insightSpec}
                        intimidation={intimidation}
                        intimidationSpec={intimidationSpec}
                        leadership={leadership}
                        leadershipSpec={leadershipSpec}
                        performance={performance}
                        performanceSpec={performanceSpec}
                        persuassion={persuassion}
                        persuassionSpec={persuassionSpec}
                        streetwise={streetwise}
                        streetwiseSpec={streetwiseSpec}
                        subterfuge={subterfuge}
                        subterfugeSpec={subterfugeSpec}
                        academics={academics}
                        academicsSpec={academicsSpec}
                        awareness={awareness}
                        awarenessSpec={awarenessSpec}
                        finance={finance}
                        financeSpec={financeSpec}
                        investigation={investigation}
                        investigationSpec={investigationSpec}
                        medicine={medicine}
                        medicineSpec={medicineSpec}
                        occult={occult}
                        occultSpec={occultSpec}
                        politics={politics}
                        politicsSpec={politicsSpec}
                        science={science}
                        scienceSpec={scienceSpec}
                        technology={technology}
                        technologySpec={technologySpec}
                    />

                )
            })}
            <div className='disciplinesContainer flex flex-col gap-4'>
                <div id="sectionTitle">
                    <div className="sectionTitle">Disciplines</div>
                </div>
                <div id="characterSheetDisciplinesContainer">
                    <div className='container flex flex-wrap w-full gap-20'>
                        {charDisciplines?.map(({ dis_id, ...data }) => {
                            return (

                                <CharDisciplines key={dis_id} params={params} data={data} />

                            )
                        })}
                        <div className="flex flex-col sm:w-3/12 sm:mx-0 max-w-xs w-full mx-auto w-xs">
                            <AddDiscipline user={data.user.id} params={params.characterID} />
                        </div>
                    </div>
                </div>
            </div>
            {charTTCB?.map(({ id, ttcb_id, chronTenets: tenets, touchstoneAndConvitions: touchstones, clanBane: bane }, character) => {

                return (


                    <CharTTCB key={ttcb_id} params={params} id={id} ttcb_id={ttcb_id} tenets={tenets} touchstones={touchstones} bane={bane} />

                )
            })}
            <div className='disciplinesContainer flex  gap-4 sm:flex-row flex-col'>
                <div className="container flex flex-col w-full">

                    <CharAdvantages user={data.user.id} params={params} data={charAdvantages} />

                </div>
                <div className="container flex flex-col w-full">
                    <CharFlaws user={data.user.id} params={params} data={charFlaws} />

                </div>
            </div>

            {charBloodPotency?.map(({ bp_id, ...data }) => {
                return (

                    <CharBloodPotency key={bp_id} params={params} data={data} />

                )
            })}


            {charBioAndNotes?.map(({ bn_id, ...data }) => {
                return (

                    <CharBioAndNotes key={bn_id} params={params} data={data} />

                )
            })}


        </div>
    )

}