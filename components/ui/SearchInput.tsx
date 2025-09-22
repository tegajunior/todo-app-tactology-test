import { SearchInputTypes } from '@/models/types'
import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'

const SearchInput: React.FC<SearchInputTypes> = ({
  bg,
  startElement,
  endElement,
  width,
  height,
  value,
  placeholder = 'Search',
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <InputGroup
      startElement={startElement}
      endElement={endElement}
      width={width}
      height={height}
      bg={bg}
      border={'1px solid #CDD6E9'}
      borderRadius={'8px'}
    >
      <Input
        ref={inputRef}
        value={value}
        border={'none'}
        padding={1}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </InputGroup>
  )
}
export default SearchInput
