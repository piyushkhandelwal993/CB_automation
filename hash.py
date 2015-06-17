import hashlib , random , requests , datetime
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time ,re
from bs4 import BeautifulSoup
from tree import *

# now = datetime.datetime.now()

# txnId=str(random.randint(1000000,100000000))
# productinfo='myprod'
# #merchantKey='gtKFFx'
# merchantKey='smsplus'
# amount=str(10.0)
# firstName=''
# email=''
# udf=''
# salt='1b1b0'
# #salt='eCwWELxi'
# data = merchantKey+'|'+ txnId + '|'+ amount + '|' + productinfo + '|' + firstName + '|' + email + '|' +'||||||||||' + salt

# hashValue= hashlib.sha512(data).hexdigest()
# card ={ 'ccname': 'piyush khandelwal',
# 		'ccnum':'5326760120826933',
# 		'ccexpmon': now.month,
# 		'ccexpyr': now.year + 1,
# 		'ccvv': 123
# 	}
# payload={
# 	'txnid': txnId,
# 	'ccexpyr':card['ccexpyr'],
# 	'ccnum' : card['ccnum'],
# 	'device_type': 1,
# 	'productinfo': productinfo,
# 	'card_name' : 'PayuTest',
# 	'amount' : amount,
# 	'pg' : 'CC',
# 	'bankcode': 'CC',
# 	'ccvv' : card['ccvv'],
# 	'surl' : 'http://www.google.com',
# 	'furl' : 'http://www.google.com',
# 	'ccname' : card['ccname'],
# 	'ccexpmon' : card['ccexpmon'],
# 	'key' : merchantKey,
# 	'hash' : hashValue
# }
# payload={
# 	'cccat': '',
# 	'ccexpyr':card['ccexpyr'],
# 	'ccnum' : card['ccnum'],
# 	'device_type': 1,
# 	'productinfo': productinfo,
# 	'card_name' : 'PayuTest',
# 	'amount' : amount,
# 	'pg' : 'CC',
# 	'bankcode': 'CC',
# 	'ccvv' : card['ccvv'],
# 	'surl' : 'http://www.google.com',
# 	'furl' : 'http://www.google.com',
# 	'ccname' : card['ccname'],
# 	'ccexpmon' : card['ccexpmon'],
# 	'key' : merchantKey,
# 	'hash' : hashValue
# }

def FindPageType( page_source):
	if isChoosePage(page_source):
		return "choose_page"
	elif isPasswordPage(page_source):
		return "password_page"
	elif isOtpPage(page_source):
		return "otp_page"
	elif isErrorPage(page_source):
		return "error"

def isChoosePage(page_source):
	ischoose=False
	radio_list=soup.select('input[type=radio]')
	if len(radio_list) ==2:
		ischoose=True

	return ischoose;

def isPasswordPage(page_source):
	return False

def isOtpPage(page_source):
	return False

def isErrorPage(page_source):
	return False

def findCommonParent(ele1,ele2):
	parent1=ele1
	parent2=ele2
	while parent1!=parent2:
		parent1=parent1.find_parent()
		if parent1==parent2:
			break
		parent2=parent2.find_parent()
	return parent1

def CollectPinInfo(soup):
	radio_list= soup.select('input[type=radio]')
	commonParent= radio_list[0]
	for i in range(1,len(radio_list)):
		commonParent=findCommonParent(commonParent,radio_list[i])
	#print commonParent
	print radio_list[0].attrs
	print radio_list[0].find_parent()
	print radio_list[0].find_previous_siblings()
	print radio_list[0].find_next_siblings()


	return {}
	
	
def selectPinOption(pinInfo):
	return 0

def CollectOtpInfo(soup):
        radio_list= soup.select('input[type=radio]')
        otpTextList= soup.find_all(text=re.compile("OTP"))
        otpRadioBtn=False
        while not otpRadioBtn:
            for item in otpTextList:
                otpRadioBtn=item.parent.select('input[type=radio]')
                if otpRadioBtn:
                    break
                else:
                    otpTextList.remove(item)
                    otpTextList.append(item.parent)
        otpRadioIndex=radio_list.index(otpRadioBtn[0])
        radio_list[otpRadioIndex]['otpRadioIndex']=otpRadioIndex
        print radio_list[otpRadioIndex].attrs
        return radio_list[otpRadioIndex].attrs
        
 
def selectOtpOption(soup, otpInfo):
	driver.find_elements_by_xpath("//input[@type='radio']")[ otpInfo['otpRadioIndex']].click()

    
driver = webdriver.Firefox()
page_tree = tree()

driver.get("http://localhost:8000/testform.html");
time.sleep(10)
bank_page_map={}

page_source=driver.page_source
if page_source :
	soup = BeautifulSoup(page_source, 'html.parser')
	currentPage=FindPageType(soup)
	if not bank_page_map.has_key(currentPage):
		page_hash = hashlib.sha512(page_source.encode('ascii', 'ignore')).hexdigest()
		bank_page_map[currentPage]= page_hash
	
	if currentPage=='choose_page':
		#selectPinOption( CollectPinInfo(soup) )
		selectOtpOption(soup, CollectOtpInfo(soup))

print bank_page_map


