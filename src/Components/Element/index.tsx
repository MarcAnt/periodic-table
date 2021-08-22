import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useIntl, FormattedMessage, defineMessages } from "react-intl";
//Styles
import { SingleElement } from "./styles";

//Hooks & Types
import { ElementInfoType } from "../../hooks/useFetchElements";

//Context
import { Context } from "Context/selectedOpsContext";

//Modal
import Modal from "Components/Modal";
import {
  SingleElementModal,
  InfoSingleElementModal,
} from "Components/Modal/styles";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const controlSmallText = (
  standarStateContext: string,
  standardState: string,
  groupBlock: string,
  atomicNumber: number,
  states: (state: string) => string
): string => {
  if (atomicNumber === 0) return "";

  if (standarStateContext === "" || standarStateContext === "group-block") {
    return states(groupBlock);
  } else {
    if (atomicNumber >= 100 && atomicNumber <= 109) return "Solid";
    if (atomicNumber === 118) return "Gas (Expected)";
    if (standardState === "") return "Solid (Expected)";
    return states(standardState);
  }
};

const Element: React.FC<ElementInfoType> = ({
  name,
  symbol,
  atomicNumber,
  groupBlock,
  standardState,
}) => {
  const { color } = useContext(Context);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keydown", function (e: KeyboardEvent) {
      if (e.key === "Escape") setShowModal(false);
    });
  }, []);

  const intl = useIntl();

  //Translated elementes names
  const names = (name: string) => {
    const elementsName = defineMessages({
      name: {
        id: "element." + name,
        defaultMessage: "{name}",
        description: "Elements Name",
      },
    });

    return intl.formatMessage(elementsName.name);
  };

  //Translated elementes standards states
  const states = (state: string) => {
    const elementsName = defineMessages({
      name: {
        id: "element." + state,
        defaultMessage: "{state}",
        description: "Elements Standard States",
      },
    });

    return intl.formatMessage(elementsName.name);
  };

  return (
    <>
      <SingleElement
        onClick={() => setShowModal(true)}
        color={color}
        groupBlock={groupBlock}
        standardState={standardState}
        atomicNumber={atomicNumber}
      >
        <p>{atomicNumber > 0 ? atomicNumber : ""}</p>
        <h1>{symbol}</h1>
        <p className="name">
          {name === "*" || name === "**" ? "" : names(name)}
        </p>

        <small>
          {controlSmallText(
            color,
            standardState,
            groupBlock,
            atomicNumber,
            states
          )}
        </small>
      </SingleElement>

      {showModal && name !== "*" && name !== "**" && (
        <Modal>
          <div className="modalOverlay"></div>
          <motion.div
            initial={{ opacity: 0, y: -1000 }}
            animate={{
              y: showModal ? 0 : -1000,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="modalContent"
          >
            <SingleElementModal
              color={color}
              groupBlock={groupBlock}
              standardState={standardState}
              atomicNumber={atomicNumber}
            >
              <p>{atomicNumber === 0 ? "" : atomicNumber}</p>
              <h1>{symbol}</h1>
              <p>{name === "*" || name === "**" ? "" : names(name)}</p>
              <small>
                {controlSmallText(
                  color,
                  standardState,
                  groupBlock,
                  atomicNumber,
                  states
                )}
              </small>
            </SingleElementModal>

            <InfoSingleElementModal>
              <p>
                <FormattedMessage
                  id="app.atomicNumber"
                  defaultMessage="Atomic Number"
                />
              </p>
              <h1>
                <FormattedMessage id="app.symbol" defaultMessage="Symbol" />
              </h1>
              <p>
                <FormattedMessage id="app.name" defaultMessage="Name" />
              </p>
              <small>
                <FormattedMessage
                  id="app.groupBlock"
                  defaultMessage="Gruop Block "
                />
                |
                <FormattedMessage
                  id="app.standardState"
                  defaultMessage="Standard State"
                />
              </small>
            </InfoSingleElementModal>

            <button className="buttonClose" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>
          </motion.div>
        </Modal>
      )}
    </>
  );
};

export default React.memo(Element);
