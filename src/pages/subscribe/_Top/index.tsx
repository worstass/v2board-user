import type { FC } from 'react'
import { useModel, Link, useIntl } from 'umi'
import type { summaryProps } from '@/components/Subscribe/Summary'
import Summary from '@/components/Subscribe/Summary'
import { message } from 'antd'
import OneClick from '@/components/Subscribe/OneClick'
import clipboardy from '@umijs/deps/reexported/clipboardy'
import type { oneClickProps } from '@/components/Subscribe/OneClick'
import Operation from './_Operation'
import { useMount } from 'ahooks'

const Top: FC = () => {
  const { subState, setSubState, initSubState, generateUrls } = useModel('useSubModel')
  const userSummaryProps: summaryProps = subState as summaryProps
  const userOneClickProps: oneClickProps = subState as oneClickProps
  const intl = useIntl()

  const resetPrivateCallBack = (subUrl: string) => {
    const subscribeUrl = subUrl
    setSubState({ ...subState, subscribeUrl, ...generateUrls(subscribeUrl) })
  }

  const render = () => {
    return (
      <>
        <div className="block block-rounded mb-4">
          <div className="block-content block-content-full">
            <div className="d-md-flex justify-content-md-between align-items-md-center">
              <Summary {...userSummaryProps}></Summary>
              <div className="p-1 p-md-3 col-md-6 col-xs-12 text-md-right">
                <Link
                  className="btn btn-sm btn-primary btn-rounded px-3 mr-1 my-1"
                  to=""
                  onClick={(e) => {
                    e.preventDefault()
                    clipboardy.write(subState.shadowServerUrl as string).then(() => {
                      message.success(intl.formatMessage({ id: 'common.message.copy_success' }))
                    })
                  }}
                >
                  {intl.formatMessage({ id: 'subscribe.copy_subscribe_secret.btn' })}
                </Link>
                <OneClick {...userOneClickProps}></OneClick>
                {(subState.planID as number) > 0 && (
                  <Operation
                    planID={subState.planID as number}
                    onResetPrivate={resetPrivateCallBack}
                  ></Operation>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderEmpty = () => {
    return (
      <>
        <Link className="block block-rounded mb-4 block-link-pop" to="/plan">
          <div className="block-content block-content-full">
            <div className="text-center align-items-md-center py-5">
              <div>
                <i className="fa fa-plus fa-2x" />
              </div>
              <div className="font-size-sm font-w700 text-uppercase text-muted pt-2">
                {intl.formatMessage({ id: 'module.plan' })}
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  }

  useMount(async () => {
    initSubState()
  })

  return (
    <>
      {subState?.planID === 0 && renderEmpty()}
      {(subState?.planID as number) > 0 && render()}
    </>
  )
}

export default Top
