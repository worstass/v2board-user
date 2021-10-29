import type { FC } from 'react'
import { Tooltip, Space } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Link, useIntl } from 'umi'

export interface statProps {
  registered: number
  invitePackageAvailableNumber: number
  invitePackagePerValue: number
  invitePackageTotalValues: number
  invitePackageRecoveryLimit: number
}

const Stat: FC<statProps> = (props) => {
  const {
    registered,
    invitePackageAvailableNumber,
    invitePackagePerValue,
    invitePackageTotalValues,
    invitePackageRecoveryLimit,
  } = props

  const intl = useIntl()
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-3 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {registered}
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.registerd' })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-3 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className={
                    invitePackageAvailableNumber > 0
                      ? 'text-success font-size-h1 font-w700'
                      : 'text-warning font-size-h1 font-w700'
                  }
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {invitePackageAvailableNumber}
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  <Space>
                    {intl.formatMessage({ id: 'invite.stat.invite_package_available_number' })}
                    <Tooltip
                      title={intl.formatMessage(
                        {
                          id: 'invite.stat.invite_package_available_number.tip',
                        },
                        { limit: invitePackageRecoveryLimit },
                      )}
                    >
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-3 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {invitePackagePerValue} GB
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.invite_package_per_value' })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-3 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {invitePackageTotalValues} GB
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.invite_package_total_values' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Stat
