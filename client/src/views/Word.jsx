import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";

function WordView(props) {
  const { word } = useParams();

  const [ wordData, setWordData ] = useState();

  const getWord = useCallback(() => {
    fetch(`http://localhost:5000/api/words/${word}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(setWordData); 
      }});
  }, [setWordData, word]);

  useEffect( () => {getWord()}, [getWord] );

  return <>
<main>
  <section>
    <h1><abbr class="valid"><a href="">{wordData && wordData.word}</a></abbr></h1>
    <span class="definition"><em>{ wordData && wordData.definition }</em></span>
  </section>
  <section>
    <table>
      <tbody>
      <tr>
        <td>Score</td>
        <td>{ wordData && wordData.score }</td>
      </tr>
      <tr>
        <td>Alphagram</td>
        <td><abbr>{ wordData && wordData.alphagram }</abbr></td>
      </tr>
      <tr>
        <td>Front hooks</td>
        <td class="flex">{ wordData && wordData.front_hooks.map(hook => <a href={"/word/" + hook + wordData.word }><abbr>{hook}-</abbr></a>) }</td>
      </tr>
      <tr>
        <td>Back hooks</td>
        <td class="flex">{ wordData && wordData.back_hooks.map(hook => <a href={"/word/" + wordData.word + hook}><abbr>-{hook}</abbr></a>) }</td>
      </tr>
      <tr>
        <td>Inner front hook</td>
        <td class="flex">{ wordData && (wordData.inner_front_hook ? <a href={"/word/" + word.slice(1)}><abbr>{word.slice(1)}</abbr></a> : "none")}</td>
      </tr>
      <tr>
        <td>Inner back hook</td>
        <td class="flex">{ wordData && (wordData.inner_back_hook ? <a href={"/word/" + word.slice(0, -1)}><abbr>{word.slice(0, -1)}</abbr></a> : "none")}</td>
      </tr>
      <tr>
        <td>Back hooks</td>
        <td class="flex">{ wordData && wordData.back_hooks.map(hook => <a href={"/word/" + wordData.word + hook}><abbr>-{hook}</abbr></a>) }</td>
      </tr>
      <tr>
        <td>Anagrams</td>
        <td class="flex">{ wordData && wordData.anagrams.map(anagram => <a href={"/word/" + anagram}><abbr>{anagram}</abbr></a>) }</td>
      </tr>
      <tr>
        <td>Probability</td>
        <td>{ wordData && wordData.probability}% (rank { wordData && wordData.probability_order })</td>
      </tr>
      <tr>
        <td>Playability</td>
        <td>{ wordData && wordData.playability} equity (rank { wordData && wordData.playability_order })</td>
      </tr>
      </tbody>
    </table>
  </section>
</main>
<footer>
  <p>All data generated from <a href="https://www.barnesandnoble.com/w/word-judge-usa-maliha-mendoza-mahmood/1117476604">Word Judge USA</a>.</p>
  <p>Made with ❤️ and ☕by <a href="https://sverona.dev">S. Verona Malone</a>.</p>
</footer>
    </>;
}

export default WordView;
