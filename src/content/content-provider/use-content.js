import {useContext} from 'react';
import ContentContext from './content-context';

const useContent = () => {
  const content = useContext(ContentContext);
  return content;
};

export default useContent;
