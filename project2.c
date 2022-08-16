#include<stdio.h>
#include<string.h>
#include<stdlib.h>


struct items{
    char item[20];
    float price;
    float qty;
};

struct orders{
    char customer[50];
    char date[50];
    int numofitems;
    struct items itm[50];
};

struct orders ord; 
struct orders order;

void generatebillheader(char name[50],char date[50])
{
    printf("\n\n");
    printf("\t  UNIQUE RESTAURANT\n");
    printf("\n--------------------------------------------");
    printf("\n DATE IS:%s",date);
    printf("\n INVOICE TO:%s",name);
    printf("\n");
    printf("-----------------------------------------------\n");
    printf(" ITEMS\t\t");
    printf("QUANTITY\t\t");
    printf("TOTAL \t");
    printf("\n---------------------------------------------");
    printf("\n\n");
}

void generatebillbody()
{
    int i;
    for(i=0;i<ord.numofitems;i++)
        {
            printf("%s\t\t",ord.itm[i].item);
            printf("%.2f\t\t",ord.itm[i].qty);
            printf("%.2f\t\t",ord.itm[i].qty*ord.itm[i].price);
            printf("\n");
        }
}

        void generatebillfooter(float total)
{
    
    printf("\n\n%f\n\n",total);
    printf("\n\n");
    float dis = 0.1*total;
    float nettotal=total-dis;
    float cgst=0.09*nettotal;
    float grandtotal=nettotal + 2*cgst;
    printf("-------------------------------------------\n");
    printf("ALL TOTAL\t\t\t%.2f",total);
    printf("\n DISOCUNT AT 10 PER. IS:\t%.2f",dis);
    printf("\n-----------------------------------------");
    printf("\n NET TOTAL IS::\t\t\t%.2f",nettotal);
    printf("\nCGST AT IS:9\t\t%.2f",cgst);
    printf("\nSGST AT 9 IS:\t\t%.2f",cgst);
    printf("\n----------------------------------------------");
    printf("\nGRAND TOTAL IS:\t\t\t%f",grandtotal);
    printf("\n-----------------------------------------------");
}


int main()
{
    int opt,n, i; 
    float total=0;
    char savebill = 'y',contflag='y';
    char name;
    FILE *fp;
    while(1)
    {
        printf("\n *************************UNIQUE RESTAURANT*******************************\n");
        printf("PLEASE SELECT YOUR OPTION\n");
        printf("\n1.GENERATE BILL DETAIL\n");
        printf("\n2.SHOW ALL BILL DETAIL\n");
        printf("\n3.EXIT\n");
        printf("\nyour choice:\n");
        scanf("%d",&opt);

         switch(opt)
        {
        case 1:
            printf("PLEASE ENTER THE NAME OF THE CUSTOMER\n");
            scanf("%s",&ord.customer);
            strcpy(ord.date,__DATE__);
            printf("ENTER THE NUMBER OF ITEMS:\n");
            scanf("%d",&n);
            ord.numofitems=n;

            for(i=0;i<ord.numofitems;i++)
            {
                printf("\n\n");
                printf("ENTER THE ITEM %d\t",i+1);
                scanf("%s",&ord.itm[i].item);
                printf("\nPLEASE ENTER THE QUANTITY:\t");
                scanf("%f",&ord.itm[i].qty);
                printf("please enter unit price\t");
                scanf("%f",&ord.itm[i].price);
                total += ord.itm[i].qty * ord.itm[i].price;
            }
           // printf("\n%f\n",total);
            generatebillheader(ord.customer,ord.date);
           generatebillbody(ord.itm[i].item,ord.itm[i].qty);
            generatebillfooter(total); 
            printf("\n\nDO YOU WANT TO SAVE BILL [y/n]");
            scanf("%s",&savebill);
            if(savebill == 'y')
            {
            fp=fopen("restrobill.txt","a+");
            fwrite(&ord,sizeof(struct orders),1,fp);
            if(fwrite !=0)
            printf("\n\n SUCCESFULY SAVED");
            else 
            printf("\n ERROR FOR SAVING BILL");
            fclose(fp);
             break;
            }
            case 2:
            fp = fopen("restrobill.txt","r");
            printf("\n*******your previous bill**************");
            while(fread(&order,sizeof(struct orders),1,fp))
         {
          generatebillheader(order.customer,order.date);
          for(i=0;i<order.numofitems;i++)
          {
            generatebillbody();
            total += order.itm[i].qty * order.itm[i].price;
          }
            
            generatebillfooter(total);  
            }
            fclose(fp);
            break;
            case 3:
            printf("\n\t\t VISIT AGAIN BYE BYE\n");
            exit(0);
            break;

            default:
            printf("\nSORRY INVALID OPTION\n");
            break;
            
        }
        printf("\nDO YOU WANT TO PERFORM ANY OTHER OPERATION? [y/n]\n");
        scanf("%s,&contflag");

    }
    return 0;
}   
        