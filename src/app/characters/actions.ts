'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'




async function checkUser() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    if (!error) {

        return data;
    }
}


export async function getCharacterSheet() {
    let data = await checkUser();


}



export async function deleteChar(prevState: any, formData: FormData) {
    let id = formData.get('id')
    const supabase = await createClient()
    const { error } = await supabase
        .from('character')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error);
    }


    revalidatePath('/characters', 'layout')

}




export async function createChar(prevState: any, formData: FormData) {
    let user = formData.get('user')
    const supabase = await createClient()
    const { data: newCharacter, error: newCharError } = await supabase
        .from('character')
        .insert([
            { uuid: user, charName: 'Character Name' },
        ])
        .select()


    if (newCharError) {
        console.log(newCharError);
    }

    if (!newCharError) {
        const { data: newAtt, error: newAttError } = await supabase
            .from('charAttributes')
            .insert([
                { id: newCharacter[0].id, uuid: user, charStr: [false, false, false, false, false] },
            ])
            .select()

        if (newAttError) {
            console.log(newAttError);
        }

        const { data: newSkills, error: newSKillsError } = await supabase
            .from('charSkills')
            .insert([
                { id: newCharacter[0].id, uuid: user, charAth: [false, false, false, false, false] },
            ])
            .select()

        if (newSKillsError) {
            console.log(newSKillsError);
        }


        const { data: newTTCB, error: newTTCBError } = await supabase
            .from('charTTCB')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newTTCBError) {
            console.log(newTTCBError);
        }

        const { data: newRHH, error: newRHHError } = await supabase
            .from('charRHH')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newRHHError) {
            console.log(newRHHError);
        }

        const { data: newHW, error: newHWError } = await supabase
            .from('charHealthAndWillpower')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newHWError) {
            console.log(newHWError);
        }

        const { data: newExp, error: newExpError } = await supabase
            .from('charExperience')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newExpError) {
            console.log(newExpError);
        }

        const { data: newBP, error: newBPError } = await supabase
            .from('charBloodPotency')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBPError) {
            console.log(newBPError);
        }

        const { data: newBN, error: newBNError } = await supabase
            .from('charBioAndNotes')
            .insert([
                { id: newCharacter[0].id, uuid: user },
            ])
            .select()

        if (newBNError) {
            console.log(newBNError);
        }


        if (!newAttError && !newSKillsError && !newAttError && !newTTCBError && !newRHHError && !newHWError && !newExpError && !newBPError && !newBNError) {
            revalidatePath('/characters', 'layout')
            redirect(`/characters/${newCharacter[0].id}`)
        }
    }
}


export async function updateCharacterInfo(formData: any) {
    let id = formData.id;
    let name = formData.name;
    let chronicle = formData.chronicle;
    let sire = formData.sire;
    let concept = formData.concept;
    let ambition = formData.ambition;
    let desire = formData.desire;
    let predator = formData.predator;
    let clan = formData.clan;
    let generation = formData.generation;
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('character')
        .update({
            charName: name,
            charChronicle: chronicle,
            charSire: sire,
            charConcept: concept,
            charAmbition: ambition,
            charDesire: desire,
            charPredator: predator,
            charClan: clan,
            charGen: generation
        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {


    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Character Info Updated!", type: "success" };
    // redirect(`/characters/${id}`);

}


export async function updateHealth(formData: any) {

    let id = formData.id
    let healthNumber = formData.healthNumber
    let health = formData.health

    const supabase = await createClient()
    const { data: charHealth, error: charHealthError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charHealth: health,
            health: healthNumber
        })
        .eq('id', id)
        .select()

    if (charHealthError) {
        console.log(charHealthError);
        return { message: `${charHealthError.message}`, type: "error" };
    }

    if (!charHealthError) {
        return { message: "Health Updated!", type: "success" };

    }


}


export async function updateWillpower(formData: any) {

    let id = formData.id
    let willpowerNumber = formData.willpowerNumber
    let willpower = formData.willpower

    const supabase = await createClient()

    const { data: charWillpower, error: charWillpowerError } = await supabase
        .from('charHealthAndWillpower')
        .update({
            charWillpower: willpower,
            willpower: willpowerNumber
        })
        .eq('id', id)
        .select()

    if (charWillpowerError) {
        console.log(charWillpowerError);
        return { message: `${charWillpowerError.message}`, type: "error" };
    }

    if (!charWillpowerError) {

        return { message: "Willpower Updated!", type: "success" };
    }
}


export async function updateResonance(formData: any) {

    let id = formData.id
    let resonance = formData.resonance

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            resonance: resonance,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error}`, type: "error" };
    }

    if (!error) {

        return { message: "Resonance Updated!", type: "success" };
    }
}


export async function updateHunger(formData: any) {

    let id = formData.id
    let hunger = formData.hunger

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            hunger: hunger,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {
        return { message: "Hunger Updated!", type: "success" };

    }
}


export async function updateHumanity(formData: any) {
    let id = formData.id
    let humanity = formData.humanity

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charRHH')
        .update({
            humanity: humanity,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {

        return { message: "Humanity Updated!", type: "success" };

    }

}


export async function updateAttributes(formData: any) {
    let id = formData.id
    let str = formData.str
    let dex = formData.dex
    let stam = formData.stam
    let char = formData.char
    let man = formData.man
    let comp = formData.comp
    let int = formData.int
    let wits = formData.wits
    let res = formData.res

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charAttributes')
        .update({
            charStr: str,
            charDex: dex,
            charStam: stam,
            charChar: char,
            charMan: man,
            charComp: comp,
            charInt: int,
            charWits: wits,
            charRes: res
        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
    }

    if (!error) {
        return { message: "Character Attributes Updated!", type: "success" };

    }
}



export async function updateSkills(formData: any) {

    let id = formData.id
    let ath = formData.ath
    let athSpec = formData.athSpec
    let bra = formData.bra
    let braSpec = formData.braSpec
    let cra = formData.cra
    let craSpec = formData.craSpec
    let dri = formData.dri
    let driSpec = formData.driSpec
    let fir = formData.fir
    let firSpec = formData.firSpec
    let lar = formData.lar
    let larSpec = formData.larSpec
    let mel = formData.mel
    let melSpec = formData.melSpec
    let ste = formData.ste
    let steSpec = formData.steSpec
    let sur = formData.sur
    let surSpec = formData.surSpec
    let ani = formData.ani
    let aniSpec = formData.aniSpec
    let eti = formData.eti
    let etiSpec = formData.etiSpec
    let ins = formData.ins
    let insSpec = formData.insSpec
    let int = formData.int
    let intSpec = formData.intSpec
    let lea = formData.lea
    let leaSpec = formData.leaSpec
    let perf = formData.perf
    let perfSpec = formData.perfSpec
    let per = formData.per
    let perSpec = formData.perSpec
    let str = formData.str
    let strSpec = formData.strSpec
    let sub = formData.sub
    let subSpec = formData.subSpec
    let aca = formData.aca
    let acaSpec = formData.acaSpec
    let awa = formData.awa
    let awaSpec = formData.awaSpec
    let fin = formData.fin
    let finSpec = formData.finSpec
    let inv = formData.inv
    let invSpec = formData.invSpec
    let med = formData.med
    let medSpec = formData.medSpec
    let occ = formData.occ
    let occSpec = formData.occSpec
    let pol = formData.pol
    let polSpec = formData.polSpec
    let sci = formData.sci
    let sciSpec = formData.sciSpec
    let tec = formData.tec
    let tecSpec = formData.tecSpec

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charSkills')
        .update({
            charAth: ath,
            charAthSpec: athSpec,
            charBrawl: bra,
            charBrawlSpec: braSpec,
            charCraft: cra,
            charCraftSpec: craSpec,
            charDrive: dri,
            charDriveSpec: driSpec,
            charFire: fir,
            charFireSpec: firSpec,
            charLarc: lar,
            charLarcSpec: larSpec,
            charMelee: mel,
            charMeleeSpec: melSpec,
            charStealth: ste,
            charStealthSpec: steSpec,
            charSurv: sur,
            charSurvSpec: surSpec,
            charAK: ani,
            charAKSpec: aniSpec,
            charEtiq: eti,
            charEtiqSpec: etiSpec,
            charInsi: ins,
            charInsiSpec: insSpec,
            charIntim: int,
            charIntimSpec: intSpec,
            charLead: lea,
            charLeadSpec: leaSpec,
            charPerf: perf,
            charPerfSpec: perfSpec,
            charPers: per,
            charPersSpec: perSpec,
            charStreet: str,
            charStreetSpec: strSpec,
            charSubt: sub,
            charSubtSpec: subSpec,
            charAcad: aca,
            charAcadSpec: acaSpec,
            charAware: awa,
            charAwareSpec: awaSpec,
            charFin: fin,
            charFinSpec: finSpec,
            charInvest: inv,
            charInvestSpec: invSpec,
            charMed: med,
            charMedSpec: medSpec,
            charOccult: occ,
            charOccutSpec: occSpec,
            charPol: pol,
            charPolSpec: polSpec,
            charSci: sci,
            charSciSpec: sciSpec,
            charTech: tec,
            charTechSpec: tecSpec

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {
        return { message: "Skills Updated!", type: "success" };

    }
}


export async function createDiscipline(user: any, id: any) {
    const supabase = await createClient()
    const { data: newDiscipline, error: newDiscError } = await supabase
        .from('charDisciplines')
        .insert([
            { uuid: user, id: id, disciplineName: 'Discipline Name' },
        ])
        .select()


    if (newDiscError) {
        console.log(newDiscError);
        return { message: `${newDiscError.message}`, type: "success" };
    }


    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Discipline Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateDiscipline(formData: any) {

    let disID = formData.disID
    let discName = formData.discName
    let discLevels = formData.discLevels
    let discNotes = formData.discNotes

    const supabase = await createClient()

    const { data: disData, error } = await supabase
        .from('charDisciplines')
        .update({
            disciplineName: discName,
            disciplineLevels: discLevels,
            disciplineNotes: discNotes
        })
        .eq('dis_id', disID)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Discipline Updated!", type: "success" };
}


export async function deleteDiscipline(disID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charDisciplines')
        .delete()
        .eq('dis_id', disID)
    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }



    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Discipline Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateTenets(formData: any) {
    let id = formData.id
    let chronTenets = formData.chronTenets
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            chronTenets: chronTenets,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }
    return { message: "Tenets Updated!", type: "success" };

}

export async function updateTouchstones(formData: any) {
    let id = formData.id
    let touchConvictions = formData.touchConvictions
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            touchstoneAndConvictions: touchConvictions,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Touchstones & Convitions Updated!", type: "success" };
}


export async function updateClanBane(formData: any) {
    let id = formData.id
    let clanBane = formData.clanBane
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charTTCB')
        .update({
            clanBane: clanBane,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    return { message: "Clan Bane Updated!", type: "success" };
}


export async function addAdvantage(user: any, id: any) {
    const supabase = await createClient()
    const { data: newAdv, error: newAdvError } = await supabase
        .from('charAdvantages')
        .insert([
            { uuid: user, id: id, advantageName: null },
        ])
        .select()


    if (newAdvError) {
        console.log(newAdvError);
        return { message: `${newAdvError.message}`, type: "error" };
    }

    if (!newAdvError) {

    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Advantage Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateAdvantage(formData: any) {
    let advID = formData.advID
    let advantageName = formData.advantageName
    let advantageLevels = formData.advantageLevels


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charAdvantages')
        .update({
            advantageName: advantageName,
            advantageLevels: advantageLevels
        })
        .eq('adv_id', advID)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {
        return { message: "Advantage Updated!", type: "success" };

    }
}


export async function deleteAdvantage(advID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charAdvantages')
        .delete()
        .eq('adv_id', advID)
    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Advantage Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function addFlaw(user: any, id: any) {
    const supabase = await createClient()
    const { data: newFlaw, error: newAdvError } = await supabase
        .from('charFlaws')
        .insert([
            { uuid: user, id: id, flawName: null },
        ])
        .select()


    if (newAdvError) {
        console.log(newAdvError);
        return { message: `${newAdvError.message}`, type: "error" };
    }

    if (!newAdvError) {

    }
    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Flaw Added!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateFlaw(formData: any) {
    let flawID = formData.flawID
    let flawName = formData.flawName
    let flawLevels = formData.flawLevels
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charFlaws')
        .update({
            flawName: flawName,
            flawLevels: flawLevels
        })
        .eq('flaw_id', flawID)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {
        return { message: "Flaw Updated!", type: "success" };
    }
}


export async function deleteFlaw(flawID: any, id: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('charFlaws')
        .delete()
        .eq('flaw_id', flawID)
    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

    }

    revalidatePath(`/characters/${id}`, 'layout');
    return { message: "Flaw Removed!", type: "success" };
    // redirect(`/characters/${id}`);
}


export async function updateBloodPotency(formData: any) {
    let id = formData.id;
    let bloodPotency = formData.bloodPotency

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBloodPotency')
        .update({
            bloodPotency: bloodPotency,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Blood Potency Updated!", type: "success" };
}

export async function updateBloodForm(formData: any) {
    let id = formData.id;
    let bloodSurge = formData.bloodSurge
    let powerBonus = formData.powerBonus
    let feedingPenalty = formData.feedingPenalty
    let mendAmount = formData.mendAmount
    let rouseReroll = formData.rouseReroll
    let baneSeverity = formData.baneSeverity


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBloodPotency')
        .update({
            bloodSurge: bloodSurge,
            powerBonus: powerBonus,
            feedingPenalty: feedingPenalty,
            mendAmount: mendAmount,
            rouseReroll: rouseReroll,
            baneSeverity: baneSeverity,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Blood Atttributes Updated!", type: "success" };
}


export async function updateNotes(formData: any) {
    let id = formData.id;
    let notes = formData.notes;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBioAndNotes')
        .update({
            notes: notes,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Notes Updated!", type: "success" };
}


export async function updateBio(formData: any) {
    let id = formData.id;
    let trueAge = formData.trueAge;
    let apparentAge = formData.apparentAge;
    let DOB = formData.DOB;
    let DOD = formData.DOD;
    let appearance = formData.appearance;
    let distinguishingFeatures = formData.distinguishingFeatures;
    let history = formData.history;

    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charBioAndNotes')
        .update({
            trueAge: trueAge,
            apparentAge: apparentAge,
            DOB: DOB,
            DOD: DOD,
            appearance: appearance,
            distinguishingFeatures: distinguishingFeatures,
            history: history,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {


    }

    return { message: "Bio Updated!", type: "success" };
}


export async function updateExperience(formData: any) {

    let totalExp = formData.totalExp;
    let id = formData.id;


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charExperience')
        .update({
            totalExp: totalExp,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

        return { message: "Experience Updated!", type: "success" };
    }

}


export async function updateSpent(formData: any) {

    let spentExp = formData.spentExp;
    let id = formData.id;


    const supabase = await createClient()
    const { data, error } = await supabase
        .from('charExperience')
        .update({
            spentExp: spentExp,

        })
        .eq('id', id)
        .select()

    if (error) {
        console.log(error);
        return { message: `${error.message}`, type: "error" };
    }

    if (!error) {

        return { message: "Spent EXP Updated!", type: "success" };
    }

}