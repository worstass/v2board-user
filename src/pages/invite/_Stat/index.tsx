import type { FC } from 'react'

import { Link, useIntl } from 'umi'

export interface statProps {
  invitePackageActivatedNumber: number
  invitePackagePerValue: number
  invitePackageTotalValues: number
}

const Stat: FC<statProps> = (props) => {
  const { invitePackageActivatedNumber, invitePackagePerValue, invitePackageTotalValues } = props

  const intl = useIntl()
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
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
                  {invitePackageActivatedNumber}
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.invite_package_activated_number' })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
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
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
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
