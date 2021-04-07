import {
  ContainerServices,
  ServiceDiv,
  ServicesDiv,
  ServiceText,
  ServiceTitle
} from './styles';
import {jsonTexts} from '../../assets/texts';

export default function OurServices() {
  return (
    <ContainerServices>
      <ServicesDiv>
        {jsonTexts.map((item, index) =>
        <>
          <ServiceDiv>
            <ServiceTitle>{item.service}</ServiceTitle>
            <ServiceText>{item.text}</ServiceText>
          </ServiceDiv>
        </>
        )
        }
      </ServicesDiv>
    </ContainerServices>
  )
}
