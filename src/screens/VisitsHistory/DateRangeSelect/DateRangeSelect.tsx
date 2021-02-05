import React from 'react'
import { Box, Collapsible, Text } from 'grommet'
import { themedColors, useColorSchemeOption } from '../../../theme-custom'
import { StyledStack } from './StyledStack'
import { StyledDateInput } from './StyledDateInput'
import { Spinner } from '../../../components'
import { SubmitButtonContainer, StyledSubmitButton } from './SubmitButton'
import { Calendar } from 'grommet-icons'
import { MeterDown } from './MeterDown'
import { Devider } from './Devider'
import { useInterval } from '../../../customHooks'
import { format } from 'date-fns'
import { PeriodDates, SetPeriodDates } from '../../../models'
import { DateDelimeterIcon } from './DateDelimeterIcon'
import { RangeButtonLabel } from './RangeButtonLabel'

const COUNTDOWN_INIT_MS = 4000
const COUNTDOWN_STEP_MS = 20

const dateToDateInputString = (date: Date): string => format(date, 'yyyy-MM-dd')
const stringToStartDate = (dateInputString: string): Date =>
  new Date(dateInputString)
const stringToEndDate = (dateInputString: string): Date =>
  new Date(dateInputString)

export const DateRangeSelect = (prop: {
  isLoading?: boolean
  periodDates: PeriodDates
  setPeriodDates: SetPeriodDates
}) => {
  const initialPeriodString = prop.periodDates.map(d =>
    dateToDateInputString(d)
  ) as string | string[]

  const [periodString, setPeriodString] = React.useState(initialPeriodString)

  const background = useColorSchemeOption(
    themedColors.tertiarySystemGroupedBackground
  )
  const buttonHoverBackground = useColorSchemeOption(
    themedColors.tertiaryButtonHoverBackground
  )

  const [isSubmitBtnVisible, setIsSubmitBtnVisible] = React.useState(false)
  const onChange = (event: { value: string[] | string }) => {
    const nextValue = event.value
    // console.log('onChange', nextValue)
    setPeriodString(nextValue)
    setIsSubmitBtnVisible(true)
  }

  function resetInput() {
    setMSLeft(null)
    setIsSubmitBtnVisible(false)
  }

  const handleSubmit = () => {
    resetInput()
    const newPeriodDates =
      typeof periodString === 'string'
        ? [stringToStartDate(periodString), stringToEndDate(periodString)]
        : [stringToStartDate(periodString[0]), stringToEndDate(periodString[1])]
    prop.setPeriodDates(newPeriodDates as PeriodDates)
  }

  const onClickOutside = () => {
    setTimeout(() => {
      // For the MeterDown not to blink.
      setMSLeft(COUNTDOWN_INIT_MS + COUNTDOWN_STEP_MS * 2)
      setDropResetKey(Date.now())
    }, 10)
  }

  const [dropResetKey, setDropResetKey] = React.useState(Date.now())
  const labelString = (s: string) => format(new Date(s), 'yyyy-MM-dd')

  const label =
    periodString[0] === periodString[1] ? (
      <RangeButtonLabel>{labelString(periodString[0])}</RangeButtonLabel>
    ) : (
      <Box direction="row" justify="center">
        <RangeButtonLabel>{labelString(periodString[0])}</RangeButtonLabel>
        <DateDelimeterIcon />
        <RangeButtonLabel>{labelString(periodString[1])}</RangeButtonLabel>
      </Box>
    )

  const buttonVersionRestProps = {
    buttonProps: {
      reverse: true,
      plain: true,
      icon: (
        <Box margin={{ left: 'auto', right: 'medium' }}>
          {prop.isLoading ? <Spinner /> : <Calendar />}
        </Box>
      ),
      label: (
        <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
          <Text>{label}</Text>
        </Box>
      ),
      disabled: prop.isLoading,
      onClick: () => setMSLeft(null)
    }
  }

  // const inputVersionRestProps = {
  //   format: 'yyyy.mm.dd - yyyy.mm.dd',
  //   buttonProps: { label },
  //   inputProps: {
  //     disabled: prop.isLoading,
  //     ...(prop.isLoading ? { icon: <Spinner /> } : {})
  //     // dropProps: {
  //     //   onClose: () => console.log('onClose fired')
  //     // }
  //   }
  // }

  const [msLeft, setMSLeft] = React.useState(null as null | number)
  useInterval(
    () => setMSLeft(s => (s ? s - COUNTDOWN_STEP_MS : s)),
    msLeft ? COUNTDOWN_STEP_MS : null
  )

  React.useEffect(() => {
    if (msLeft !== 0) return
    setPeriodString(initialPeriodString)
    resetInput()
  }, [msLeft, initialPeriodString])

  return (
    <Box align="center" direction="row">
      <Box width="medium">
        <StyledStack>
          <StyledDateInput
            key={dropResetKey}
            value={periodString}
            calendarProps={{
              firstDayOfWeek: 1
            }}
            onChange={onChange}
            background={background}
            dropProps={{ onClickOutside }}
            {...buttonVersionRestProps}
            // {...inputVersionRestProps}
          />
          <SubmitButtonContainer>
            <Collapsible direction="horizontal" open={isSubmitBtnVisible}>
              <StyledSubmitButton
                background={background}
                hoverBackground={buttonHoverBackground}
                label="Применить"
                icon={
                  msLeft !== null && msLeft <= COUNTDOWN_INIT_MS ? (
                    <MeterDown
                      meterValue={msLeft / 50}
                      meterLabel={Number((msLeft / 1000).toFixed(0))}
                    />
                  ) : (
                    <Devider background={buttonHoverBackground} />
                  )
                }
                onClick={handleSubmit}
              />
            </Collapsible>
          </SubmitButtonContainer>
        </StyledStack>
      </Box>
    </Box>
  )
}
