import React, { useContext, useState, useEffect } from "react";
import { InfoElementStyles, InfoWrapper, SelectBox } from "./styles";

import Select from "react-select";

import Element from "../../Element";

import { useIntl, FormattedMessage } from "react-intl";
import useFetchElements from "../../../hooks/useFetchElements";
import { ATOMIC_NUMBER_FOR_INFO } from "../../../helpers/atomicNumbers";
import { Context } from "../../../Context/selectedOpsContext";

const options = [
  { value: "group-block", label: "Chemical Group Block" },
  { value: "standard-state", label: "Standard State" },
];

const options_es = [
  { value: "group-block", label: "Grupo Químico" },
  { value: "standard-state", label: "Estado Estandard" },
];

const placeholders = {
  en: "Select Property",
  es: "Seleccionar Propiedad",
};

const InfoElement: React.FC = () => {
  const { state: info } = useFetchElements(
    ATOMIC_NUMBER_FOR_INFO,
    "infoelement"
  );
  const { setColor } = useContext(Context);
  const intl = useIntl();

  const [selectOptions, setSelectOptions] = useState(options);
  const [placeholder, setPlaceholder] = useState(placeholders.en);

  useEffect(() => {
    intl.locale === "es"
      ? setSelectOptions(options_es)
      : setSelectOptions(options);
  }, [intl]);

  useEffect(() => {
    intl.locale === "es"
      ? setPlaceholder(placeholders.es)
      : setPlaceholder(placeholders.en);
  }, [intl]);

  const handleChange = (e: any) => {
    setColor(e.value);
  };

  return (
    <InfoWrapper>
      <InfoElementStyles>
        <div className="info-element">
          {info?.map((el) => (
            <Element
              key={el.name}
              name={el.name}
              atomicNumber={el.atomicNumber}
              symbol={el.symbol}
              groupBlock={el.groupBlock}
              standardState={el.standardState}
            />
          ))}
        </div>
        <div className="info-card">
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
        </div>
      </InfoElementStyles>

      <SelectBox>
        <Select
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          options={selectOptions}
        />
      </SelectBox>
    </InfoWrapper>
  );
};

export default InfoElement;
