export function getText(): string {
    const sample = textSamples[sampleIndex];

    incrementSampleIndex();

    return sample;
}

function incrementSampleIndex() {
    sampleIndex++;
    if (sampleIndex >= textSamples.length) {
        sampleIndex = 0;
    }
}

let sampleIndex = 0;

const textSamples = [
    `And in those days cometh John the Baptist preaching in the desert of Judea.`,
    `And saying: Do penance: for the kingdom of heaven is at hand.`,
    `For this is he that was spoken of by Isaias the prophet, saying: A voice of one crying in the desert, Prepare ye the way of the Lord, make straight his paths.`,
    `And the same John had his garment of camels' hair, and a leathern girdle about his loins: and his meat was locusts and wild honey.`,
    `Then went out to him Jerusalem and all Judea, and all the country about Jordan:`,
    `And were baptized by him in the Jordan, confessing their sins.`,
    `And seeing many of the Pharisees and Sadducees coming to his baptism, he said to them: Ye brood of vipers, who hath shewed you to flee from the wrath to come?`,
    `Bring forth therefore fruit worthy of penance.`,
    `And think not to say within yourselves, We have Abraham for our father. For I tell you that God is able of these stones to raise up children to Abraham.`,
    `For now the axe is laid to the root of the trees. Every tree therefore that doth not yield good fruit, shall be cut down, and cast into the fire.`,
    `I indeed baptize you in the water unto penance, but he that shall come after me, is mightier than I, whose shoes I am not worthy to bear; he shall baptize you in the Holy Ghost and fire.`,
    `Whose fan is in his hand, and he will thoroughly cleanse his floor and gather his wheat into the barn; but the chaff he will burn with unquenchable fire.`,
    `Then cometh Jesus from Galilee to the Jordan, unto John, to be baptized by him.`,
    `But John stayed him, saying: I ought to be baptized by thee, and comest thou to me?`,
    `And Jesus answering, said to him: Suffer it to be so now. For so it becometh us to fulfill all justice. Then he suffered him.`,
    `And Jesus being baptized, forthwith came out of the water: and lo, the heavens were opened to him: and he saw the Spirit of God descending as a dove, and coming upon him.`,
    `And behold a voice from heaven, saying: This is my beloved Son, in whom I am well pleased.`,
    `Then Jesus was led by the spirit into the desert, to be tempted by the devil.`,
    `And when he had fasted forty days and forty nights, afterwards he was hungry.`,
    `And the tempter coming said to him: If thou be the Son of God, command that these stones be made bread.`,
    `Who answered and said: It is written, Not in bread alone doth man live, but in every word that proceedeth from the mouth of God.`,
    `Then the devil took him up into the holy city, and set him upon the pinnacle of the temple,`,
    `And said to him: If thou be the Son of God, cast thyself down, for it is written: That he hath given his angels charge over thee, and in their hands shall they bear thee up, lest perhaps thou dash thy foot against a stone.`,
    `Jesus said to him: It is written again: Thou shalt not tempt the Lord thy God.`,
    `Again the devil took him up into a very high mountain, and shewed him all the kingdoms of the world, and the glory of them,`,
    `And said to him: All these will I give thee, if falling down thou wilt adore me.`,
    `Then Jesus saith to him: Begone, Satan: for it is written, The Lord thy God shalt thou adore, and him only shalt thou serve.`,
    `Then the devil left him; and behold angels came and ministered to him.`,
    `And when Jesus had heard that John was delivered up, he retired into Galilee:`,
    `And leaving the city Nazareth, he came and dwelt in Capharnaum on the sea coast, in the borders of Zabulon and Nephthalim;`,
    `That it might be fulfilled which was said by Isaias the prophet:`,
    `Land of Zabulon and land of Nephthalim, the way of the sea beyond the Jordan, Galilee of the Gentiles:`,
    `The people that sat in darkness, hath seen great light: and to them that sat in the region of the shadow of death, light is sprung up.`,
    `From that time Jesus began to preach, and to say: Do penance, for the kingdom of heaven is at hand.`,
    `And Jesus walking by the sea of Galilee, saw two brethren, Simon who is called Peter, and Andrew his brother, casting a net into the sea (for they were fishers).`,
    `And he saith to them: Come ye after me, and I will make you to be fishers of men.`,
    `And they immediately leaving their nets, followed him.`,
    `And going on from thence, he saw other two brethren, James the son of Zebedee, and John his brother, in a ship with Zebedee their father, mending their nets: and he called them.`,
    `And they forthwith left their nets and father, and followed him.`,
    `And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom: and healing all manner of sickness and every infirmity, among the people.`,
    `And his fame went throughout all Syria, and they presented to him all sick people that were taken with divers diseases and torments, and such as were possessed by devils, and lunatics, and those that had palsy, and he cured them:`,
    `And much people followed him from Galilee, and from Decapolis, and from Jerusalem, and from Judea, and from beyond the Jordan.`,
] as const;
