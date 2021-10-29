import type { FC } from 'react'
import { useState } from 'react'
import { useModel, history } from 'umi'
import Password from './_Password'
import Setting from './_Setting'
import Telegram from './_Telegram'
import Reset from './_Reset'
import { useMount } from 'ahooks'
import delay from '@umijs/utils/lib/delay/delay'

const ProfilePage: FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState')
  const { subState, initSubState } = useModel('useSubModel')

  useMount(async () => {
    await initSubState()
  })

  const [currentUser, setCurrentUser] = useState<API.User.InfoItem>(
    initialState?.currentUser?.data as API.User.InfoItem,
  )

  const changeHandler = () => {
    const userInfoResult: Promise<API.User.InfoResult> | undefined = initialState?.fetchUserInfo?.()
    if (userInfoResult === undefined) {
      return
    }
    userInfoResult.then((result: API.User.InfoResult) => {
      setInitialState({ ...initialState, currentUser: result })
      setCurrentUser(result.data)
    })
  }

  const passwordChangeHandler = () => {
    delay(1000).then(() => {
      history.push('/login')
    })
  }

  return (
    <>
      {currentUser && (
        <div className="content content-full">
          <Password onChange={passwordChangeHandler} />
          <Setting
            remindExpire={Boolean(currentUser.remind_expire).valueOf()}
            remindTraffic={Boolean(currentUser.remind_traffic).valueOf()}
            onChange={changeHandler}
          />
          <Telegram subscribeUrl={subState.subscribeUrl as string} />
          <Reset />
        </div>
      )}
    </>
  )
}

export default ProfilePage
