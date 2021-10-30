import * as React from 'react';
import styled from 'styled-components/native'

const StyledView = styled.View`
flex: 1;
alignItems:center ;
background: #C9749B;
`;
const NameText = styled.Text`
fontSize: 23 px;
color: #6C4B5A;
`;
const StyledText = styled.Text`
fontSize: 30px;
textAlign:center;
font-weight: bold;
`;
var products = [];

function InputScreen() {
  const [products, setText] = React.useState([]);
  const onPress = () => {
    products.push(product.text);
    console.log(products);
  }

  return (
    <StyleView >
       <StyleText>
       Add to supermarket list
    </StyleText>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText({ ...product, text })}
        placeholder="Type Anything..."
      />
      <Button
        onPress={onPress}
  
      >
        <ButtonText style={styles.buttonText}>+</ButtonText>
      </Button>
    </StyleView>
  );
}
export { InputScreen, products};