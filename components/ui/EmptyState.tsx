import { EmptyState, VStack } from '@chakra-ui/react'
import { HiColorSwatch } from 'react-icons/hi'

const EmptyStateComponent = () => {
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <HiColorSwatch />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Start adding tasks</EmptyState.Title>
          <EmptyState.Description>
            Your task list is a empty, start adding now!
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  )
}
export default EmptyStateComponent
