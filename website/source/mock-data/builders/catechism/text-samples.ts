import { Language } from '@catechism-types';

import { getLanguage } from '../../language/language-state.ts';

//#region exported functions
const sampleIndices = new Map<Language, number>();
Object.values(Language).forEach((language) => sampleIndices.set(language, 0));

export function getText(): string {
    const language = getLanguage();

    let index = sampleIndices.get(language) ?? 0;

    const textSamples = getTextSamples(language);
    if (index >= textSamples.length) {
        index = 0;
    }
    sampleIndices.set(language, index + 1);

    return textSamples.at(index) ?? '';
}

export function getUniqueWords(language: Language): Array<string> {
    const words = getTextSamples(language)
        .map((line) => removePunctuation(line))
        .join(' ')
        .split(' ');

    const uniqueWords = new Set(words);
    return Array.from(uniqueWords);
}
//#endregion

//#region helper functions
function getTextSamples(language: Language): Array<string> {
    switch (language) {
        case Language.ENGLISH:
            return englishSamples;
        case Language.LATIN:
            return latinSamples;
        case Language.SPANISH:
            return spanishSamples;
    }
}

function removePunctuation(text: string): string {
    const punctuationMarks = [
        `.`,
        `,`,
        `;`,
        `:`,
        `'`,
        `"`,
        `‘`,
        `’`,
        `“`,
        `”`,
        `(`,
        `)`,
    ];

    for (const punctuationMark of punctuationMarks) {
        text = text.replaceAll(punctuationMark, '');
    }

    return text;
}
//#endregion

//#region text samples
// source: Botany: The Science of Plant Life by Norman Taylor (https://www.gutenberg.org/ebooks/49211)
const englishSamples = [
    `Perhaps few of us realize that without plants all our modern civilization would be swept away and that upon plants has been built all that we have so far accomplished and everything that we may yet become.`,
    `The overthrow of any king or republic, the wiping out of all money and finance or any of the manifold evidences of our modern world could not for a moment be compared to what would happen to us with the sudden destruction of plant life from the earth.`,
    `Food and drink, the very houses we live in and heat, medicines and drugs, books and pictures, musical instruments and tires for automobiles, all these and hundreds of our daily needs depend upon the fact that plants of many different kinds grow upon the earth and in sufficient amounts to be of importance.`,
    `It is easy to say in opposition to this that we get much food from animals, that we can drink water, and that neither of these comes from plants.`,
    `But water would soon be lost to us if forests did not conserve it, and upon pasturage most of our food animals depend for their life.`,
    `The discovery of a single tree in the mountains of northern South America made possible for white man the malarial regions unfit for him before the advent of quinine.`,
    `Just before Shakespeare's time sugar and tea and coffee became regular articles of commerce.`,
    `Not until the discovery of America was tobacco, Indian corn, chocolate, the pineapple or the potato known to man.`,
    `Upon the spruce forests in the north depends much of our paper supply, from cotton we get clothes and explosives, from hemp and sisal ropes, from a single kind of Brazilian tree most of our rubber, and from rice a food that sustains nearly half the world.`,
    `While it is thus plain enough that life depends upon plants now present upon the earth it may not be so obvious that from certain ancient forests has come the greatest source of artificial heat in the world.`,
    `Coal is nothing but the partial decomposition of vast forests, living ages before man was first found upon the earth, subsequently buried, and under the earth's pressure forming soft coal, or where the pressure was severe enough hard coal.`,
    `When it is remembered that a dead, partly decayed tree is only a fraction of its living size and that coal is found in many parts of the world in tremendous quantities we get a partial glimpse of what our debt is to a great forest that lived in luxuriance no one knows how many millions of years ago, reached its climax, and upon whose embedded remains we depend for heat.`,
    `Later on in this book will be given in greater detail some of the plants useful to man and just how we have used them.`,
    `Hardly any part of the study of the plant kingdom has so much of interest as that dealing with our utilization of the things that grow about us.`,
    `From the earliest struggles of our half-savage ancestors to grow definite crops rescued from the wild down to our modern nut butter made from the partly fermented meat of the cocoanut and shipped half round the world before it is refined, man has constantly striven to use for his advantage the plants most likely to prove valuable.`,
    `Countries and empires have been built upon such facts.`,
    `Even to-day rubber from the Straits Settlements and palm oil from Africa are deciding the economic life of those countries.`,
    `But man's use of plants, in fact his absolute reliance upon them, is not the only reason for attempting to find out more about them, what they are, where they came from, how they live and produce their young.`,
    `A knowledge of even a small part of such a science opens up a rich field of inquiry involving a concept of plant life of greater interest than mere bread and butter.`,
    `For those with an eye to see and knowledge to interpret, a landscape with its trees or flowers or marshes may contain a host of hidden secrets of dramatic import.`,
    `Unfolded before one may be found a spectacle of struggle and strife, quiet tragedies of the forest, the inexorable pressure of plants upon their neighbors, the woods upon the prairies or an apparently forlorn hope of some plant living in a hot desert or upon some icy mountain peak.`,
    `And while these rather obvious things are happening how much more is hidden of the adjustments that leaves or flowers or roots or other organs of the plant are constantly making to the conditions about them.`,
    `Upon the perfection of such adjustments to light, heat, or water, for instance, depends their very existence.`,
    `Mistakes are fatal, the forces of nature seem peculiarly relentless, and it is literally a case where many are called but few chosen.`,
    `Of the untold millions of seeds produced each year few ever grow, yet out of this enormous wastage springs all that makes the earth not only habitable but the beautiful panorama of vegetation to which we are so accustomed that it is nearly taken for granted.`,
    `The study of botany attempts to answer some of the questions raised above and many others.`,
    `Subsequent parts of the book will deal with what plants are, the behavior of them, with the life histories of some of the better known ones, with the grouping of plants in families and their relationships one to another, with their uses to man, with the history of their development from the earliest times, and finally with their distribution over the earth.`,
    `The latter will be discussed last because it is the most important of all the phases of plant life.`,
    `How plants are distributed, whether as forest or prairie or thickets or what not, depends upon the response of individual plants and their organs to the conditions about them.`,
    `The type of vegetation in different parts of the world has been dictated by the success of the survivors in meeting existing conditions and of having met them in the past.`,
    `Upon this fact rests our civilization to-day.`,
    `Upon this fact there has been reared a study the cultural, esthetic, and practical value of which may well outweigh any other.`,
    `While the study of botany is necessarily a technical one with a language all its own, its terms, though generally unfamiliar, are unexcelled for their purpose.`,
    `They will be avoided here as much as a clear understanding of the subject will permit.`,
    `The few that must be used will be explained where they first occur and it is assumed that the reader will understand their subsequent use.`,
    `What we commonly call plants, such as corn or buttercups or an oak tree, are so familiar that a definition of what plants are may seem needless.`,
    `It would be quite so if these generally recognized examples comprised all the plant kingdom.`,
    `Actually what are ordinarily thought of as plants make up only a fraction of the great plant world.`,
    `The fact that our familiar roadside and garden plants produce blossoms followed by a fruit and seed, such as peas and beans and all the ordinary flora of any region, separates them at once from that other large group of plants that do not.`,
    `Common examples of the latter class are the green scum on the ponds, moss, seaweed, the rust on wheat, yeast, disease-causing bacteria, the smallest of all known plants, and many others.`,
    `Most of these organisms are so small that they can be distinguished only under the higher powers of the microscope.`,
    `Some of them in their habits and growth are like the minute animals described in the volume of this series devoted to that subject.`,
    `In fact there are organisms about which scientists are still in doubt as to their animal or vegetable character.`,
    `One or two characteristics common to most plants, however, separate them from animals and these are their method of getting food and their practically immovable mode of life.`,
    `Animals, however simple, do eat and digest their food, plants take various mineral substances from the earth or air or water in the form of inorganic matter such as oxygen, carbon, nitrogen, and all the food materials found in the soil, and transform them, with the aid of sunshine, into the structure that characterizes each particular form.`,
    `Plants, then, may be defined as any living organism that, with minor exceptions, has the power to assimilate inorganic substances and transform them into organic matter.`,
    `Nothing else in all the realm of nature has this power.`,
    `It is a possession beyond all price, this ability to take from the soil and air and water simple chemical substances and under the magic of sunlight transform them into the wonderful plant life of the world.`,
    `But this faculty has its handicaps, for it is usually, though not always, associated with inability to move from place to place, which, in some measure, even the simplest animals can accomplish.`,
    `It will be readily understood that this definition of plants includes many other things that are commonly attributed to the plant kingdom.`,
    `For our purpose the discussion of these relatively unfamiliar forms of plant life will be left until later.`,
    `A rough and ready distinction between those plants that everyone recognizes as such and those others like yeast and microbes, which are plants to most of us only by virtue of the definition given above, is that the first group produce flowers and seeds and the second do not.`,
    `It should not be forgotten, and it will be shown later, that this is not a true distinction, but for practical purposes of dividing the plant kingdom it suffices.`,
    `The fact of outstanding importance to everyone who really looks at most plants is that part of them are above ground and part below.`,
    `This simple observation carries with it the recognition of a fundamental difference of plant structure, namely roots and stem.`,
    `Most plants bear obvious leaves, and at some time in their life flowers, inevitably followed by fruits and seeds.`,
    `The ideally perfect plant would consist, then, of root, stem, leaves, flowers, fruit, and seed.`,
    `These are subject to many changes of form, sometimes they are put to strange uses, and occasionally one or two may be lacking, as the stem is apparently from many violets, and leaves from some cactus and from the Tjemoro tree of Malaya.`,
    `In fact, so varied are the different forms of these common attributes of most plants, so important are these differences of structure that no right understanding of plant life can be had without examining each in some detail.`,
    `The obvious purpose of the roots of plants is to serve as an anchorage or holdfast.`,
    `Their other and equally important function is to secure food for the plant, a process that will be described in the part devoted to Plant Behavior.`,
    `Certain plants bear no roots and attach themselves to the roots of other plants in which case they literally steal their food, as does the mistletoe and some others.`,
    `Roots are of various kinds, depending upon the soil in which they grow and upon the kind of plant to which they are attached.`,
    `In the case of annuals, which live only one year, as does the purslane, and biennials, which live only two years, as does the fringed gentian, the roots are mostly fibrous and apt to be only slightly under the surface.`,
    `In perennials, which live many years, such as the dandelion, the root is deeper and forms what is known as a taproot.`,
    `In shrubs and trees they are harder, woodier, and often penetrate to great depths.`,
    `If we examine the roots of a tree, we find a large part of them are woody, often as thick as the smaller branches, and it is only toward their extremities that they branch out into the multitude of rootlets that creep through the earth seeking food for the tree.`,
    `Some, as in the spruce or hemlock, do not go very deep but spread great distances through the soil in search of food, others, like the hickory, go nearly straight down.`,
    `The interesting feature of these tree roots is that the part nearest the trunk is all but dead, and acts mostly as an anchor, while the fibrous rootlets or even finer subdivisions known as root hairs at the extremities are the food gatherers.`,
    `At the very end of all rootlets and of roots is a rootcap, harder than the rest of the threadlike rootlet.`,
    `This rootcap is, if not quite dead, at least useless as a food gatherer, but serves as a tiny pioneer wedge which forces its way among stones or other obstructions, so allowing the living root hairs just behind to gather the food to which it leads the way.`,
    `In certain of the rocky islands of the Bahamas wild fig trees may be seen, growing on the bare rocks, their roots sprawling in every direction in search of a crevice through which the rootcap can force its way.`,
    `Such roots may extend thirty or forty feet from the trunk of the tree over the bare rock in search of a favorable crack where they plunge to the cool depths and secure the food and water necessary for life.`,
    `Roots are not always of this common type.`,
    `Sometimes, particularly in certain biennials, they are swelled to form great thickened portions, often weighing many pounds.`,
    `The sweet potato is a familiar example, and a related plant, one of our morning-glories, has an enormous perennial root, known to weigh as much as fifty pounds.`,
    `This swelling of the roots of plants is a quite common characteristic of certain kinds and has great commercial significance.`,
    `Carrots, turnips, rutabagas, beets, and parsnips are familiar examples.`,
    `The purpose of such roots is to store food for the plant, and this thrifty habit of some roots has been turned by the gardeners to our advantage.`,
    `It is a common sight to see parts of a sidewalk heaved up by a tree root and their force in this respect is tremendous.`,
    `One of our common ferns has been known to raise a weight of over 500 pounds, and even to break through a concrete walk.`,
    `Such is the force exerted by the roots of plants that we can truly think of roots as pushing through the earth almost regardless of obstacles, binding the soil together and not only serving the needs of the plants, but actually holding the soil on steep slopes.`,
    `Where fire or ruthless lumbering has stopped this natural process the washing away of the soil and exposure of the bare rocks leaves desolation behind it.`,
    `While most roots live under the surface many grow in the air, and a few grow from stems that are injured.`,
    `The tomato vine often produces roots at the joints or where it has been injured.`,
    `Such roots, known as adventitious rootsand, are fairly common in many plants, the common garden practice of making cuttings, which take root under favorable conditions, being based upon this fact.`,
    `But some plants produce roots in the air, as in poison ivy and the trumpet creeper, without injury or the gardener's skill, and are known as aerial roots.`,
    `They are some of the most peculiar and fantastic of nature's devices for allowing plants to grow in apparently unfavorable places.`,
    `In many orchids, some relatives of the pineapple, and a few other air-inhabiting plants, the roots live wholly in the air, the plants being fastened to a tree or even to a telegraph wire.`,
    `Such plants live on the air and water vapor, and are mostly inhabitants of moist tropical regions.`,
    `Quite the most extraordinary of aerial roots are those produced in certain kinds of fig trees.`,
    `Starting perhaps a hundred feet in the air and no thicker than a lead pencil they appear first as slender vine-like streamers blown hither and yon by the wind.`,
    `Eventually they reach the ground and penetrate it, grow often to a great size and even form trunklike connections with the tree top.`,
    `The banyan tree of India is the best known case of this peculiar habit.`,
    `One which started from a single trunk, subsequently sending out great numbers of aerial roots, has now spread to such a size that it is over 2,000 feet in circumference, has 3,000 trunks, and once sheltered 7,000 soldiers.`,
    `A variation of this habit is the case of a giant fig tree of the West Indies in which a bird may deposit the seed of another tree.`,
    `The seedling soon develops, sending out long, at first threadlike, aerial roots which are wrapped around the tree trunk.`,
    `As the roots increase in size and further encircle the trunk they ultimately reach the ground, where they are frequently a foot in diameter.`,
    `Then the true nature of the process becomes evident.`,
    `For these apparently innocent aerial roots, as they reach the ground, have so completely inclosed the old trunk and their pressure is so great that they literally strangle the tree from which they started.`,
    `It is slower but just as deadly as the strangulation of an animal by a boa constrictor, for these encircling roots cut off by strangulation the ascent of the sap, thus killing the tree.`,
    `Fate sometimes overtakes them, however, as it is a common sight to see the strangler meet the same end.`,
    `Some of nature's most ruthless battles are fought out in this way, very silently, but very effectively.`,
    `Nothing dies harder than generally accepted delusions, particularly those regarding plant lore, and of all such incorrect impressions the one that a potato is a root, is the hardiest and most difficult to kill.`,
    `Yet, the “eyes” of a potato give it away if one stops for a moment to reflect that the eyes are only buds and buds grow only on stems.`,
    `That is one of the chief uses of stems—to support in the air the leaves and flowers that come from its buds, and no matter if the stem, as in the potato and many other plants, be ever so deeply buried their true stem nature cannot be mistaken.`,
    `Sometimes these underground stems are not thickened but lengthened out, in which case, notably in common garden iris, they are called rootstocks.`,
    `Again, these buried stems may be swollen, as in the potato, when they are known as tubers.`,
    `Onions and the jack-in-the-pulpit bear still other kinds of underground stems, and there are many more, but they cannot be mistaken for roots, for it will be seen from Figures 6-9 that on their under sides they bear roots themselves.`,
    `Besides this they bear buds or shoots, which no true root ever does.`,
    `Stems above ground, which is the most usual form for them, are of many kinds, all serving the purpose of support to the leaves and flowers, and as a means of carrying sap from the roots or underground stems to the upper part of the plant, and also to carry certain foods to the roots from the leaves, of which more anon.`,
    `In the case of herbs, like goldenrod or daisy, the stem may be apparently all pith on the inside, with only a thin outer coating of harder substance, not unlike bark, but usually green.`,
    `If we examine the cut-off trunk of a tree, a quite different structure is apparent.`,
    `Any lumberman can point out at once “heartwood” and “sapwood”, and his distinctions are just as good as those of the scientist, for he says in these two words as plainly as can be said that heartwood is the oldest and sapwood the youngest.`,
    `The sapwood is nearer the bark and is honeycombed with passages which serve to carry the sap from the roots to the tree top, while just under the bark is the bright, green, living layer, known as cambium, which is renewed each year.`,
    `The phloem is the carrier for the food made in the leaves to the roots.`,
    `It is the successive layers of cambium, year after year, that gives to tree trunks their annual rings.`,
    `The age of almost all trees can be reckoned exactly by counting these, one representing a year's growth, and the tree's rate of growth estimated from the closeness of the rings.`,
    `Fires or droughts, perhaps long forgotten, here find a lasting record in rings so close together as to be all but invisible.`,
    `The part nearest the center of the trunk is the heartwood, usually quite lifeless, yet in its maturity furnishing us with lumber.`,
    `It may be and often is completely decayed, without injuring the flow of sap or the life of the tree for many years.`,
    `These two streams of sap, one going up and the other returning to the roots, each in its proper channel, are interspersed with air chambers that extend from the center of the tree out toward the bark, where they end in inconspicuous dots called lenticels.`,
    `It is as though nature had provided an air-cooling device for the constant activity of these diverse currents.`,
    `These lenticels are prominent on the bark of cherry, but whether obvious or not they are found in nearly all woody stems and insure a constant supply of fresh air to the busy interior.`,
    `In palms, sugar cane, corn, bamboo, and many other plants there is not any distinction between heartwood and sapwood, and in place of bark there is nothing but an outer rind, harder than the interior tissue.`,
    `Such stems do not usually rot first at the center, have no cambium, and have no annual rings.`,
    `This method of growth and structure is associated nearly always with definite leaf and flower forms peculiar to it and differing from most other plants.`,
    `So fundamental are these characteristics, so uniform their occurrence and so clear are the distinctions between them and other plants that botanists have divided all flowering plants into those belonging to this group or to some others.`,
    `More will be said of this in the chapter on the Families of Plants and Their Relationship.`,
    `The stems of some plants, such as the Big Trees of California, for instance, are among the oldest and most permanent of living things.`,
    `“General Sherman,” one of the biggest in that most famous grove, was nearly three thousand five hundred years old when Columbus discovered America; it has lived through all the great periods of modern history, and to-day it is over 270 feet high and 35 feet in diameter.`,
    `No living thing is so large or has lived so long.`,
    `In Australia are great forests of blue gum trees even taller than our Californian Big Trees, but not so old nor so thick.`,
    `In the Pacific, off the coast of Oregon and British Columbia, a seaweed is commonly found with stalks over 500 feet long, and in India the rattan palm climbs over the tree tops for great distances, a single stem not much thicker than a broomstick measuring over 700 feet long.`,
    `The search by leaves for light and air results in the stems of some plants performing almost incredible feats.`,
    `Whether it is one of the Big Trees with a great massive trunk, or the rattan palm with its sinuous winding through the topmost heights of the tropical forests of India, the result is always upward to a “place in the sun.”`,
    `This struggle for sunlight has taken many forms in different plants, the ordinary vines like morning-glory or grapevine, for instance, where the climbing stem is of great advantage.`,
    `Some vines always twine to the left, as the hopvine, others to the right, as in the morning-glory, all seeking support from something else, each adopting its own most useful way of getting its leaves in the most advantageous position to catch the life-giving sunshine.`,
    `If we could look down on any forest from an aeroplane, the striking efforts of nearly all plants, whether herbs, shrubs, vines, or trees, to get the utmost sunshine for their leaves would be evident at once.`,
    `No apparently impossible twisting or bending of tree trunks or reaching out of stems of vines but is to be found in the inexorable struggle of stems to fulfill their task of giving the plant its chance to reach “a place in the sun.”`,
    `Sometimes mere climbing or twining does not seem sure enough—it seems as though winds or the elements might break loose the vine from its support and thereby kill its chances.`,
    `In certain vines this contingency appears to have been foreseen, and as if to clinch their opportunity of growing onward they are provided with special helps.`,
    `Slender green tendrils, delicate prolongations of the stem, begin, almost insidiously, to catch hold of the nearest support and by a couple of turns about it and subsequent strengthening of their tissues make a permanent holdfast.`,
    `The grapevine is a case in point.`,
    `And as if this were not enough, certain other plants, such as the Boston ivy, have small disks which attach themselves to bare walls or tree trunks.`,
    `This is to make assurance doubly sure, and it is this that makes the Boston ivy so useful to the gardeners for covering walls.`,
    `Some stems accomplish their purpose not by holding fast to a support in the air, but by creeping along the ground, as in the running blackberry, and often in the Virginia creeper.`,
    `The purpose is the same, and, as if to confirm it, a few otherwise quite prostrate vines have their tips turned upward to the light, notably in the case of the creeping speedwell.`,
    `In certain plants the stem may assume curious forms due to special conditions under which they live and to which adjustment is necessary for the plant's existence.`,
    `In deserts, for instance, the cactus produces practically no leaves and the green stem performs not only the function of leaves but acts as a storage for water.`,
    `Where water is scarce this is of tremendous advantage, a single cactus having been known to store up 125 gallons.`,
    `A similar habit of the cactuslike spurges in South Africa gives as weird an atmosphere to parts of their landscapes as we find in Arizona.`,
];

// Source: the Vulgate
// https://www.biblegateway.com/passage/?search=Matthaeus%204&version=VULGATE
const latinSamples = [
    // Genesis 1
    'In principio creavit Deus caelum et terram.',
    'Terra autem erat inanis et vacua, et tenebrae erant super faciem abyssi: et spiritus Dei ferebatur super aquas.',
    'Dixitque Deus: Fiat lux. Et facta est lux.',
    'Et vidit Deus lucem quod esset bona: et divisit lucem a tenebris.',
    'Appellavitque lucem Diem, et tenebras Noctem: factumque est vespere et mane, dies unus.',
    'Dixit quoque Deus: Fiat firmamentum in medio aquarum: et dividat aquas ab aquis.',
    'Et fecit Deus firmamentum, divisitque aquas, quae erant sub firmamento, ab his, quae erant super firmamentum. Et factum est ita.',
    'Vocavitque Deus firmamentum, Caelum: et factum est vespere et mane, dies secundus.',
    'Dixit vero Deus: Congregentur aquae, quae sub caelo sunt, in locum unum: et appareat arida. Et factum est ita.',
    'Et vocavit Deus aridam Terram, congregationesque aquarum appellavit Maria. Et vidit Deus quod esset bonum.',
    'Et ait: Germinet terra herbam virentem, et facientem semen, et lignum pomiferum faciens fructum juxta genus suum, cujus semen in semetipso sit super terram. Et factum est ita.',
    'Et protulit terra herbam virentem, et facientem semen juxta genus suum, lignumque faciens fructum, et habens unumquodque sementem secundum speciem suam. Et vidit Deus quod esset bonum.',
    'Et factum est vespere et mane, dies tertius.',
    'Dixit autem Deus: Fiant luminaria in firmamento caeli, et dividant diem ac noctem, et sint in signa et tempora, et dies et annos:',
    'ut luceant in firmamento caeli, et illuminent terram. Et factum est ita.',
    'Fecitque Deus duo luminaria magna: luminare majus, ut praeesset diei: et luminare minus, ut praeesset nocti: et stellas.',
    'Et posuit eas in firmamento caeli, ut lucerent super terram,',
    'et praeessent diei ac nocti, et dividerent lucem ac tenebras. Et vidit Deus quod esset bonum.',
    'Et factum est vespere et mane, dies quartus.',
    'Dixit etiam Deus: Producant aquae reptile animae viventis, et volatile super terram sub firmamento caeli.',
    'Creavitque Deus cete grandia, et omnem animam viventem atque motabilem, quam produxerant aquae in species suas, et omne volatile secundum genus suum. Et vidit Deus quod esset bonum.',
    'Benedixitque eis, dicens: Crescite, et multiplicamini, et replete aquas maris: avesque multiplicentur super terram.',
    'Et factum est vespere et mane, dies quintus.',
    'Dixit quoque Deus: Producat terra animam viventem in genere suo, jumenta, et reptilia, et bestias terrae secundum species suas. Factumque est ita.',
    'Et fecit Deus bestias terrae juxta species suas, et jumenta, et omne reptile terrae in genere suo. Et vidit Deus quod esset bonum,',
    'et ait: Faciamus hominem ad imaginem et similitudinem nostram: et praesit piscibus maris, et volatilibus caeli, et bestiis, universaeque terrae, omnique reptili, quod movetur in terra.',
    'Et creavit Deus hominem ad imaginem suam: ad imaginem Dei creavit illum, masculum et feminam creavit eos.',
    'Benedixitque illis Deus, et ait: Crescite et multiplicamini, et replete terram, et subjicite eam, et dominamini piscibus maris, et volatilibus caeli, et universis animantibus, quae moventur super terram.',
    'Dixitque Deus: Ecce dedi vobis omnem herbam afferentem semen super terram, et universa ligna quae habent in semetipsis sementem generis sui, ut sint vobis in escam:',
    'et cunctis animantibus terrae, omnique volucri caeli, et universis quae moventur in terra, et in quibus est anima vivens, ut habeant ad vescendum. Et factum est ita.',
    'Viditque Deus cuncta quae fecerat, et erant valde bona. Et factum est vespere et mane, dies sextus.',
    // Matthew 3
    'In diebus autem illis venit Joannes Baptista praedicans in deserto Judaeae,',
    'et dicens: Poenitentiam agite: appropinquavit enim regnum caelorum.',
    'Hic est enim, qui dictus est per Isaiam prophetam dicentem: Vox clamantis in deserto: Parate viam Domini; rectas facite semitas ejus.',
    'Ipse autem Joannes habebat vestimentum de pilis camelorum, et zonam pelliceam circa lumbos suos: esca autem ejus erat locustae, et mel silvestre.',
    'Tunc exibat ad eum Jerosolyma, et omnis Judaea, et omnis regio circa Jordanem;',
    'et baptizabantur ab eo in Jordane, confitentes peccata sua.',
    'Videns autem multos pharisaeorum, et sadducaeorum, venientes ad baptismum suum, dixit eis: Progenies viperarum, quis demonstravit vobis fugere a ventura ira?',
    'Facite ergo fructum dignum poenitentiae.',
    'Et ne velitis dicere intra vos: Patrem habemus Abraham. Dico enim vobis quoniam potens est Deus de lapidibus istis suscitare filios Abrahae.',
    'Jam enim securis ad radicem arborum posita est. Omnis ergo arbor, quae non facit fructum bonum, excidetur, et in ignem mittetur.',
    'Ego quidem baptizo vos in aqua in poenitentiam: qui autem post me venturus est, fortior me est, cujus non sum dignus calceamenta portare: ipse vos baptizabit in Spiritu Sancto, et igni.',
    'Cujus ventilabrum in manu sua: et permundabit aream suam: et congregabit triticum suum in horreum, paleas autem comburet igni inextinguibili.',
    'Tunc venit Jesus a Galilaea in Jordanem ad Joannem, ut baptizaretur ab eo.',
    'Joannes autem prohibebat eum, dicens: Ego a te debeo baptizari, et tu venis ad me?',
    'Respondens autem Jesus, dixit ei: Sine modo: sic enim decet nos implere omnem justitiam. Tunc dimisit eum.',
    'Baptizatus autem Jesus, confestim ascendit de aqua, et ecce aperti sunt ei caeli: et vidit Spiritum Dei descendentem sicut columbam, et venientem super se.',
    'Et ecce vox de caelis dicens: Hic est Filius meus dilectus, in quo mihi complacui.',
    // Matthew 4
    'Tunc Jesus ductus est in desertum a Spiritu, ut tentaretur a diabolo.',
    'Et cum jejunasset quadraginta diebus, et quadraginta noctibus, postea esuriit.',
    'Et accedens tentator dixit ei: Si Filius Dei es, dic ut lapides isti panes fiant.',
    'Qui respondens dixit: Scriptum est: Non in solo pane vivit homo, sed in omni verbo, quod procedit de ore Dei.',
    'Tunc assumpsit eum diabolus in sanctam civitatem, et statuit eum super pinnaculum templi,',
    'et dixit ei: Si Filius Dei es, mitte te deorsum. Scriptum est enim: Quia angelis suis mandavit de te, et in manibus tollent te, ne forte offendas ad lapidem pedem tuum.',
    'Ait illi Jesus: Rursum scriptum est: Non tentabis Dominum Deum tuum.',
    'Iterum assumpsit eum diabolus in montem excelsum valde: et ostendit ei omnia regna mundi, et gloriam eorum,',
    'et dixit ei: Haec omnia tibi dabo, si cadens adoraveris me.',
    'Tunc dicit ei Jesus: Vade Satana: Scriptum est enim: Dominum Deum tuum adorabis, et illi soli servies.',
    'Tunc reliquit eum diabolus: et ecce angeli accesserunt, et ministrabant ei.',
    'Cum autem audisset Jesus quod Joannes traditus esset, secessit in Galilaeam:',
    'et, relicta civitate Nazareth, venit, et habitavit in Capharnaum maritima, in finibus Zabulon et Nephthalim:',
    'ut adimpleretur quod dictum est per Isaiam prophetam:',
    'Terra Zabulon, et terra Nephthalim, via maris trans Jordanem, Galilaea gentium:',
    'populus, qui sedebat in tenebris, vidit lucem magnam: et sedentibus in regione umbrae mortis, lux orta est eis.',
    'Exinde coepit Jesus praedicare, et dicere: Poenitentiam agite: appropinquavit enim regnum caelorum.',
    'Ambulans autem Jesus juxta mare Galilaeae, vidit duos fratres, Simonem, qui vocatur Petrus, et Andream fratrem ejus, mittentes rete in mare (erant enim piscatores),',
    'et ait illis: Venite post me, et faciam vos fieri piscatores hominum.',
    'At illi continuo relictis retibus secuti sunt eum.',
    'Et procedens inde, vidit alios duos fratres, Jacobum Zebedaei, et Joannem fratrem ejus, in navi cum Zebedaeo patre eorum, reficientes retia sua: et vocavit eos.',
    'Illi autem statim relictis retibus et patre, secuti sunt eum.',
    'Et circuibat Jesus totam Galilaeam, docens in synagogis eorum, et praedicans Evangelium regni: et sanans omnem languorem, et omnem infirmitatem in populo.',
    'Et abiit opinio ejus in totam Syriam, et obtulerunt ei omnes male habentes, variis languoribus, et tormentis comprehensos, et qui daemonia habebant, et lunaticos, et paralyticos, et curavit eos:',
    'lilaea, et Decapoli, et de Jerosolymis, et de Judaea, et de trans Jordanem.',
];

// Source: Biblia Torres Amat
// https://www.bibliatodo.com/la-biblia/Torres-amat/mateo-4
const spanishSamples = [
    // Genesis 1
    'En el principio creó Dios el cielo y la tierra.',
    'La tierra, estaba informe y vacía, las tinieblas cubrían la superficie del abismo, y el espíritu de Dios se movía sobre las aguas.',
    'Dijo, pues, Dios: Sea hecha la luz. Y la luz quedó hecha.',
    'Y vio Dios que la luz era buena, y dividió la luz de las tinieblas.',
    'A la luz la llamó día, y a las tinieblas noche; así de la tarde aquella y de la mañana siguiente resultó el primer día.',
    'Dijo asimismo Dios: Haya un firmamento o una gran extensión en medio de las aguas, que separe unas aguas de otras.',
    'E hizo Dios el firmamento, y separó las aguas que estaban debajo del firmamento, de aquéllas que estaban sobre el firmamento. Y quedó hecho así.',
    'Y al firmamento le llamó Dios cielo. Con lo que de tarde y de mañana se cumplió el día segundo.',
    'Dijo también Dios: Reúnanse en un lugar las aguas que están debajo del cielo y aparezca lo árido o seco. Y así se hizo.',
    'Y al elemento árido le dio Dios el nombre de tierra, y a las aguas reunidas las llamó mares. Y vio Dios que lo hecho estaba bueno.',
    'Dijo asimismo: Produzca la tierra hierba verde y que dé simiente, y plantas fructíferas que den fruto conforme a su especie, y contengan en sí mismas su simiente sobre la tierra. Y así se hizo.',
    'Con lo que produjo la tierra hierba verde, que da simiente según su especie, y árboles que dan fruto, de los cuales cada uno tiene su propia semilla según la especie suya. Y vio Dios que la cosa era buena.',
    'Y de la tarde y mañana resultó el día tercero.',
    'Dijo después Dios: Haya lumbreras o cuerpos luminosos en el firmamento del cielo, que distingan el día y la noche, y señalen los tiempos o las estaciones, los días y los años.',
    'A fin de que brillen en el firmamento del cielo, y alumbren la tierra. Y fue hecho así.',
    'Hizo, pues; Dios dos grandes lumbreras: la lumbrera mayor para que presidiese al día; y la lumbrera menor, para presidir la noche; e hizo las estrellas.',
    'Y las colocó en el firmamento o extensión del cielo, para que resplandeciesen sobre la tierra.',
    'Y presidiesen el día y a la noche, y separasen la luz de las tinieblas. Y vio Dios que la cosa era buena.',
    'Con lo que de tarde y mañana, resultó el día cuarto.',
    'Dijo también Dios: Produzcan las aguas reptiles animados que vivan en el agua, y aves que vuelen sobre la tierra, debajo del firmamento del cielo.',
    'Creó, pues, Dios los grandes peces , y todos los animales que viven y se mueven, producidos por las aguas según sus especies, y asimismo todo lo volátil según su género. Y vio Dios que lo hecho era bueno.',
    'Y los bendijo, diciendo: Creced y multiplicaos y henchid las aguas del mar, y multiplíquense las aves sobre la tierra.',
    'Con lo que de la tarde y mañana resultó el día quinto.',
    'Dijo todavía Dios: Produzca la tierra animales vivientes en cada género animales domésticos, reptiles y bestias silvestres de la tierra, según sus especies. Y fue hecho así.',
    'Hizo, pues, Dios las bestias silvestres de la tierra según sus especies, y los animales domésticos, y todo reptil terrestre según su especie. Y vio Dios que lo hecho era bueno.',
    'Y por fin dijo: Hagamos al hombre a imagen y semejanza nuestra; y domine a los peces del mar, y a las aves del cielo, y a las bestias, y a toda la tierra, y a todo reptil que se mueve sobre la tierra.',
    'Creó, pues, Dios al hombre a imagen suya: a imagen de Dios le creó; los creó varón y hembra.',
    'Y les echó Dios su bendición y dijo: Creced y multiplicaos, y henchid la tierra, y enseñoreaos de ella, y dominad a los peces del mar y a las aves del cielo y a todos los animales que se mueven sobre la tierra.',
    'Y añadió Dios: Ved que os he dado todas las hierbas las cuales producen simiente sobre la tierra, y todos los árboles los cuales tienen en sí mismos simiente de su especie, para que os sirvan de alimento a vosotros,',
    'y a todos los animales de la tierra, y a todas las aves del cielo, y a todos cuantos animales vivientes se mueven sobre la tierra, a fin de que tengan que comer. Y así se hizo.',
    'Y vio Dios todas las cosas que había hecho; y eran en gran manera buenas. Con lo que de la tarde y de la mañana se formó el día sexto.',
    // Matthew 3
    'En aquella temporada se dejó ver Juan Bautista predicando en el desierto de Judea,',
    'y diciendo: Haced penitencia, porque está cerca el reino de los cielos.',
    'Este es aquel de quien se dijo por el profeta Isaías: Es la voz del que clama en el desierto, diciendo: Preparad el camino del Señor. Haced derechas sus sendas.',
    'Traía Juan un vestido de pelos de camello y un cinto de cuero a sus lomos, y su comida eran langostas y miel silvestre.',
    'Iban, pues, a encontrarle las gentes de Jerusalén y de toda la Judea, y de toda la ribera del Jordán;',
    'y recibían de él el bautismo en el Jordán, confesando sus pecados.',
    'Pero como viese venir a su bautismo muchos de los fariseos y saduceos, les dijo: ¡Oh raza de víboras!, ¿quién os ha enseñado que con solas exterioridades podéis huir de la ira que os amenaza?',
    'Haced, pues, frutos dignos de penitencia;',
    'y dejaos de decir interiormente: Tenemos por padre a Abrahán; porque yo os digo que poderoso es Dios para hacer que nazcan de estas mismas piedras hijos de Abrahán.',
    'Mirad que ya el hacha está aplicada a la raíz de los árboles; y todo árbol que no produce buen fruto, será cortado y echado al fuego.',
    'Yo a la verdad os bautizo con agua para moveros a la penitencia; pero el que ha de venir después de mí es más poderoso que yo, y no soy yo digno siquiera de llevarle las sandalias; él es quien ha de bautizaros en el Espíritu Santo y en el fuego.',
    'El tiene en sus manos la pala, y limpiará perfectamente su era; y su trigo lo meterá en el granero; mas las pajas quemarás en un fuego inextinguible.',
    'Por este tiempo vino Jesús de Galilea al Jordán en busca de Juan para ser de él bautizado.',
    'Juan se resistía a ello, diciendo: Yo debo ser bautizado de ti, ¿y tú vienes a mí?',
    'A lo cual respondió Jesús , diciendo: Déjame hacer ahora, que así es como conviene que nosotros cumplamos toda justicia. Juan entonces condescendió con él.',
    'Bautizado, pues, Jesús , al instante que salió del agua se le abrieron los cielos, y vio bajar al Espíritu de Dios a manera de paloma y posar sobre él.',
    'Y se oyó una voz del cielo que decía: Este es mi hijo amado, en quien he puesto toda mi complacencia.',
    // Matthew 4
    'En aquella sazón, Jesús fue conducido del espíritu de Dios al desierto, para que fuese tentado allí por el diablo.',
    'Y después de haber ayunado cuarenta días con cuarenta noches, tuvo hambre.',
    'Entonces, acercándose el tentador, le dijo: Si eres el Hijo de Dios, di que esas piedras se conviertan en panes.',
    'Mas Jesús le respondió: Escrito está: No sólo de pan vive el hombre, sino de toda palabra o disposición que sale de la boca de Dios.',
    'Después de esto lo transportó el diablo a la santa ciudad de Jerusalén , y lo puso sobre lo alto del templo;',
    'y le dijo: Si eres el Hijo de Dios, échate de aquí abajo; pues está escrito: Que te ha encomendado a sus ángeles, los cuales te tomarán en las palmas de sus manos para que tu pie no tropiece contra alguna piedra.',
    'Le replicó Jesús : También está escrito: No tentarás al Señor tu Dios.',
    'Todavía le subió el diablo a un monte muy encumbrado, y le mostró todos los reinos del mundo y la gloria de ellos.',
    'Y le dijo: Todas estas cosas te daré si, postrándote delante de mí, me adorares.',
    'Le respondió entonces Jesús : Apártate de ahí, Satanás; porque está escrito: Adorarás al Señor Dios tuyo, y a él solo servirás.',
    'Y con esto le dejó el diablo; y he aquí que se acercaron los ángeles y le servían.',
    'Oyendo después Jesús que Juan había sido encarcelado, se retiró a Galilea.',
    'Y dejando la ciudad de Nazaret, fue a morar en Cafarnaúm, ciudad marítima en los confines de Zabulón y Neftalí;',
    'con que vino a cumplirse lo que dijo el profeta Isaías:',
    'El país de Zabulón y el país de Neftalí, por donde se va al mar de Tiberíades a la otra parte del Jordán, la Galilea de los gentiles,',
    'este pueblo que yacía en las tinieblas, ha visto una luz grande: Luz que ha venido a iluminar a los que habitan en la región de las sombras de la muerte.',
    'Desde entonces empezó Jesús a predicar y decir: Haced penitencia, porque está cerca el reino de los cielos.',
    'Caminando un día Jesús por la ribera del mar de Galilea vio a dos hermanos, Simón, llamado Pedro, y Andrés su hermano, echando la red en el mar (pues eran pescadores)',
    'y les dijo: Seguidme a mí, y yo os haré pescadores de hombres.',
    'Al instante los dos, dejadas las redes, lo siguieron.',
    'Pasando más adelante, vio a otros dos hermanos, Santiago, hijo de Zebedeo, y Juan su hermano, remendando sus redes en la barca con Zebedeo su padre, y los llamó;',
    'Ellos también al punto, dejadas las redes y a su padre, lo siguieron.',
    'E iba Jesús recorriendo toda la Galilea, enseñando en sus sinagogas y predicando la buena nueva del reino celestial, y sanando toda dolencia y toda enfermedad en los del pueblo;',
    'con lo que corrió su fama por toda la Siria, y le presentaban todos los que estaban enfermos y acosados de varios males y dolores agudos, los endemoniados, los epilépticos, los paralíticos; y los curaba.',
    'Y le iba siguiendo mucha gente de Galilea, y Decápolis, y Jerusalén , y Judea, y de la otra parte del Jordán.',
];
//#endregion
