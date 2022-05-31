import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";
import { PartnerType } from "@Object/Enum";
import { allPartnerTypes } from "src/Object/Enum";
import { H4 } from "src/StyledComponents/Text";

/**
 * 파트너 타입(들)을 보여주고 선택할 수 있는 캐러샐입니다.
 * 선택된 파트너 타입 상태와 파트너 타입 상태 선택 함수는
 * 이 캐러샐을 호출하는 함수에서 정의하고 넘겨주어야 합니다.
 *
 * @example
 * function PartnerTypes(){
 *  const [selectedTypes, setSelectedTypes] = useState<PartnerType[]>([])
 *
 *  return(
 *    <PartnerTypeCarousel
 *      selectedTypes={selectedTypes}
 *      setSelectedTypes={setSelectedTypes}
 *    />
 *  )
 * }
 *
 * @reference @Object/Research/Research.type.carousel.component.tsx
 * @author 현웅
 */
export function PartnerTypeCarousel({
  selectedTypes,
  setSelectedTypes,
}: {
  selectedTypes: PartnerType[];
  setSelectedTypes: (type: PartnerType[]) => void;
}) {
  /**
   * 파트너 타입 토글 함수
   * @author 현웅
   */
  function toggleSelectedType(type: PartnerType) {
    const updatedSelectedTypes = [...selectedTypes];

    if (!selectedTypes.includes(type)) {
      updatedSelectedTypes.push(type);
      setSelectedTypes(updatedSelectedTypes);
      return;
    }

    setSelectedTypes(
      updatedSelectedTypes.filter(previousType => {
        return previousType !== type;
      }),
    );
  }

  /**
   * 파트너 타입 캐러샐 컴포넌트입니다.
   * PartnerTypeCarousel()가 인자로 받아온 selectedTypes를 공유하기 위해
   * PartnerTypeCarousel() 안쪽에 정의되어 있습니다.
   * @author 현웅
   */
  function PartnerTypeCarouselItem({ item }: { item: PartnerType }) {
    return (
      <Item__Container
        selected={selectedTypes.includes(item)}
        onPress={() => {
          toggleSelectedType(item);
        }}>
        <Item__Text selected={selectedTypes.includes(item)}>{item}</Item__Text>
      </Item__Container>
    );
  }

  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={allPartnerTypes}
      RenderItem={PartnerTypeCarouselItem}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: { paddingHorizontal: 16 },
});

const Item__Container = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    //TODO: #THEME
    selected ? theme.color.blue.pastel : "#EEEEEE"};
  padding: 8px 15px;
  margin: 0px 3px;
  border-radius: 6px;
`;

const Item__Text = styled(H4)<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? theme.color.blue.text : theme.color.text_color_bbb};
  font-weight: bold;
`;
