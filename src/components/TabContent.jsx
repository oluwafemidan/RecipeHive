import TabButton from "./shared/TabButton";
import { HELP } from "./utils/Data";
import { Container } from "./shared/Container";
import { useState } from "react";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("tip1");

  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    setActiveTab(selectedButton);
  }

  let tab;

  if (activeTab) {
    tab = (
      <div>
        <h3>{HELP[activeTab].title}</h3>
        <h4>{HELP[activeTab].tip}</h4>
        <ul className="list-disc pl-5 space-y-1">
          {HELP[activeTab].details
            .trim()
            .split("\n")
            .map((item, index) => (
              <li key={index}>{item.replace(/^-\s*/, "")}</li>
            ))}
        </ul>
      </div>
    );
  }
  return (
    <Container>
      <section id="HiveNav">
        <div id="ta">
          <TabButton
            id="ta"
            isSelected={activeTab === "tip1"}
            onSelect={() => handleSelect("tip1")}
          >
            Cooking Tips & Tricks
          </TabButton>
          <TabButton
            id="ta"
            isSelected={activeTab === "tip2"}
            onSelect={() => handleSelect("tip2")}
          >
            How to Store Leftovers
          </TabButton>
          <TabButton
            isSelected={activeTab === "tip3"}
            onSelect={() => handleSelect("tip3")}
          >
            Healthy Eating Made Easy
          </TabButton>
          <TabButton
            isSelected={activeTab === "tip4"}
            onSelect={() => handleSelect("tip4")}
          >
            Join Our Community
          </TabButton>
        </div>

        <div className="fin wood-5 mt-8">{tab}</div>
      </section>
    </Container>
  );
};

export default TabContent;
