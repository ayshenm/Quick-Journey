import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { FC, Fragment } from 'react';
import { paths } from '@/routes/paths';

interface IBreadcrumb {
  label: string;
  link: string;
}

interface IProps {
  title: string;
  breadcrumbs?: Array<IBreadcrumb>;
}

const PageHeader: FC<IProps> = ({
  title,
  breadcrumbs = [
    {
      label: 'Dashboard',
      link: paths.user.dashoard
    },
  ]
}) => {
  return (
    <div className="my-5 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold text-foreground"></h2>

      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
              </BreadcrumbItem>
              {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
          {breadcrumbs.length > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageHeader;
