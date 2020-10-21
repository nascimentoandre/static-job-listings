import React from "react";

export default function Job(props) {

  const tagList = (role, level, languages, tools) => {
    let tList = [];
    tList.push(role);
    tList.push(level);
    languages.forEach((item, index) => {tList.push(item)});
    tools.forEach((item, index) => {tList.push(item)});
    return tList
  }

  const newJob = (isNew, isFeatured) => {
    if (isNew && isFeatured) return {"borderLeft": "3.5px solid hsl(180, 29%, 50%)"};
    else return {}
  }

  return (
    <div style={newJob(props.new, props.featured)} className="job">
      <div className="information">
        <div>
          <img className="logo" src={require(`${ props.logo }`)} alt={props.id} />
        </div>
        <div>
          <p className="company-name">{props.company} {props.new && <span className="new-tag">NEW!</span>}{props.featured && <span className="featured-tag">FEATURED</span>}</p>
          <p className="position">{props.position}</p>
          <p className="other-info">{props.postedAt} <span className="small-square">&#9642;</span> {props.contract} <span className="small-square">&#9642;</span> {props.location}</p>
        </div>
      </div>
      <div className="tags">
        {tagList(props.role, props.level, props.languages, props.tools).map((item, index) => {
          return <div key={index} className="job-tag">{item}</div>
        })}

      </div>
    </div>
  );
}
