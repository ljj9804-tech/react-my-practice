import styled, { css } from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 360px;
  padding: 1.2rem 1.5rem;
  margin: 1rem auto;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  // Hover 효과
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: #333;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0.5rem;
`;

const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
`;

// 2. SALE 배지
const SaleBadge = styled.span`
  background-color: #ff4d4f;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
`;

const CardContent = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
  line-height: 1.6;
`;

const Ex9 = ({ name, price, content, isDiscounted }) => {
  return (
    <ProductCard>
      <CardTitle>{name}</CardTitle>

      <PriceWrapper>
        <Price>{price}원</Price>
        {isDiscounted && <SaleBadge>SALE</SaleBadge>}
      </PriceWrapper>

      <CardContent>{content}</CardContent>
    </ProductCard>
  );
};

export default Ex9;

// ## 종합 실습 문제

// **원하는 스타일링 방식을 골라** 아래 UI를 구현해 보세요!

// **요구사항:**

// - 상품 카드 컴포넌트 (`ProductCard`)
// - 상품 이름, 가격, 할인 여부(`isDiscounted`) 표시
// - `isDiscounted`가 true이면 가격에 빨간색 "SALE" 배지 표시
// - 카드에 hover 효과 (살짝 위로 이동: `transform: translateY(-4px)`)
