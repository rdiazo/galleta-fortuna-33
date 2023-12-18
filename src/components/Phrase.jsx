
const Phrase = ({ quoteRandom }) => {

    return (
        <div>
            <p className="app__phrase">{quoteRandom.phrase}</p>
            <p className="app__author">{quoteRandom.author} </p>
        </div>
    )
}

export default Phrase